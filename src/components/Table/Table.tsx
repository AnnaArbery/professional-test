import React, { useState, FC, ReactNode } from 'react';
import clsx from 'clsx';
import useFetchRedux from '../../hooks/useFetchRedux';
import { fetchTabs } from '../../store/tabsSlice';
import TableDescribe from './TableDescribe';
import Modal from '../UI/Modal/Modal';
import Counter from '../UI/Counter/Counter';
import Dropdown from '../UI/Dropdown/Dropdown';
import './Table.scss';
import { useAppSelector } from '../../hooks/useStoreHooks';
import { useActions } from '../../hooks/useStoreHooks';

const Table = () => {
  const { setEmpoyment, setEmploymentTitle } = useActions();
  const { status, tabs = [] } = useAppSelector(state => state.tabs);
  const { employment = [], titles = [] } = useAppSelector(state => state.content);
  const { employment: employmentUser, employmentTitle } = useAppSelector(state => state.user);
  const [showModal, setShowModal] = useState(null);
  const [totalCol, setTotalCol] = useState(employmentUser);

  useFetchRedux(fetchTabs, status === 'loaded');

  const handleTotalCol = (col: number, count: number) => {
    const nextTotalCol = totalCol.map((el, id) => (id === col ? el + count : el));
    setEmpoyment([...nextTotalCol]);
    setTotalCol([...nextTotalCol]);
  };

  const saveTitle = (id: number) => (title: string) => {
    setEmploymentTitle({ id, title });
  };

  return (
    <div className="overflow-auto">
      <div className="table bg-white mt-6">
        <div className="table__row table__row--header">
          <Table.Td>Потребности</Table.Td>
          {titles.length &&
            titles.map((title, col: number) => (
              <Table.Td addClass="table__col--selector" key={title}>
                <Dropdown
                  title={title}
                  list={employment}
                  cb={saveTitle(col)}
                  selected={employmentTitle[col]}
                />
              </Table.Td>
            ))}
          <Table.Td addClass="table__col--balls">Баллы</Table.Td>
        </div>

        {tabs.map(({ id, tab }) => (
          <Table.TrBody
            key={id}
            tab={tab}
            setShowModal={() => setShowModal(id)}
            handleTotalCol={handleTotalCol}
            titlesCol={titles}
            row={id}
          />
        ))}

        <div className="table__row table__row--balls">
          <Table.Td>Баллы</Table.Td>
          {titles.length &&
            titles.map((value, idx: number) => <Table.Td key={value}>{totalCol[idx]}</Table.Td>)}
          <Table.Td addClass="table__col--balls">&nbsp;</Table.Td>
        </div>
      </div>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={() => setShowModal(false)}
          renderContent={() => TableDescribe({ id: showModal, tabs })}
          addClass="modal--no-py"
        />
      )}
    </div>
  );
};

type TrBodyProps = {
  row: number;
  tab: string;
  setShowModal: () => void;
  handleTotalCol: (idx: number, add: number) => void;
  titlesCol: string[];
  children?: ReactNode;
};

type TdProps = {
  addClass?: string;
  children?: ReactNode;
};

const TrBody = ({ row, tab, setShowModal, handleTotalCol, titlesCol }: TrBodyProps) => {
  const { setNeeds } = useActions();
  const { needs: needsUser, selected } = useAppSelector(state => state.user);
  const [totalRow, setTotalRow] = useState(needsUser[row] || 0);

  const handleCount = (idx: number) => (add: number, count: number) => {
    setTotalRow(prev => prev + add);
    handleTotalCol(idx, add);
    setNeeds({
      id: [idx, row],
      count,
      title: row,
      value: totalRow + add,
    });
  };

  return (
    <div className="table__row">
      <Table.Td key={row}>
        <span>{tab}</span>
        <button className="btn-i" onClick={setShowModal}>
          i
        </button>
      </Table.Td>
      {titlesCol.length &&
        titlesCol.map((value, col) => (
          <Table.Td addClass="table__col--counter" key={value}>
            <Counter cb={handleCount(col)} value={selected[`${col}${row}`]} />
          </Table.Td>
        ))}
      <Table.Td addClass="table__col--balls">{totalRow}</Table.Td>
    </div>
  );
};

const Td = ({ children, addClass }: TdProps) => (
  <div className={clsx('table__col', addClass)}>{children}</div>
);

Table.TrBody = TrBody;
Table.Td = Td;

export default Table;
