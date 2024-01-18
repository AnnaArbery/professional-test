import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx'
import useFetchRedux from '../../hooks/useFetchRedux';
import { setNeeds, setEmpoyment, setEmploymentTitle } from '../../store/userSlice'
import { fetchTabs } from '../../store/tabsSlice';
import TableDescribe from './TableDescribe';
import Modal from '../UI/Modal/Modal'
import Counter from '../UI/Counter/Counter'
import Dropdown from '../UI/Dropdown/Dropdown'
import './Table.scss'

const Table = () => {
  const dispatch = useDispatch();
  const {status, tabs = []} = useSelector(state => state.tabs);
  const {employment = [], titles = []} = useSelector(state => state.content);
  const [showModal, setShowModal] = useState(null);
  const [totalCol, setTotalCol] = useState([0,0,0,0]);

  useFetchRedux(fetchTabs, status === 'loaded');

  const handleTotalCol = (col, count) => {
    const nextTotalCol = totalCol.map((el,id) => (id === col) ? el + count : el);
    dispatch(setEmpoyment([...nextTotalCol]))
    setTotalCol([...nextTotalCol]);
  }

  const saveTitle = (id) => (title)=> {
    dispatch(setEmploymentTitle({id, title}))
  }

  return (
    <div className='overflow-auto'>
      <div className='table bg-white mt-6'>

        <div className='table__row table__row--header'>
          <Table.Td>Потребности</Table.Td>
          {titles.length && titles.map((title, idx) =>
            <Table.Td addClass='table__col--selector' key={title}>
              <Dropdown title={title} id={idx} list={employment} cb={saveTitle(idx)} />
            </Table.Td>
          )}
          <Table.Td addClass='table__col--balls'>Баллы</Table.Td>
        </div>

        {tabs.map(({id, tab}) => 
          <Table.TrBody
            key={id}
            tab={tab}
            setShowModal={() => setShowModal(id)}
            handleTotalCol={handleTotalCol}
            titlesCol={titles}
            id={id}
          />
        )}

        <div className='table__row table__row--balls'>
          <Table.Td>Баллы</Table.Td>
          {titles.length && titles.map((value, idx) => <Table.Td key={value}>{totalCol[idx]}</Table.Td>)}
          <Table.Td addClass='table__col--balls'>&nbsp;</Table.Td>
        </div>

      </div>

      {showModal && 
        <Modal
          showModal={showModal}
          setShowModal={() => setShowModal(false)}
          renderContent={() => TableDescribe({id: showModal, tabs})}
          addClass='modal--no-py'
        />
      }
    </div>
  );
};

const TrBody = ({id, tab, setShowModal, handleTotalCol, titlesCol}) => {
  const dispatch = useDispatch();
  const [totalRow, setTotalRow] = useState(0);

  const handleCount = idx => add => {
    setTotalRow(prev => prev + add)
    handleTotalCol(idx, add);
    dispatch(setNeeds({title: tab, value: totalRow + add, id: [idx, id]}))
  }

  return (
    <div className='table__row'>
      <Table.Td key={id}>
        <span>{tab}</span>
        <button className='btn-i' onClick={setShowModal}>i</button>
      </Table.Td>
      {titlesCol.length && titlesCol.map((value, idx) =>
        <Table.Td addClass='table__col--counter' key={value}>
          <Counter cb={handleCount(idx)} />
        </Table.Td>
      )}
      <Table.Td addClass='table__col--balls'>
        {totalRow}
      </Table.Td>
    </div>
  )
}

const Td = ({children, addClass}) => (
  <div className={clsx('table__col', addClass)}>
    {children}
  </div>
)

Table.TrBody = TrBody;
Table.Td = Td;

export default Table;