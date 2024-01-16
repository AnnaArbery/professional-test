import React, {useState} from 'react';
import parse from 'html-react-parser';
import clsx from 'clsx'

const TableDescribe = ({id: idTab, tabs}) => {
  const [currentTab, setCurrentTab] = useState(idTab);
  const [current] = tabs.filter(tab => tab.id === currentTab);

  return (
    <div className='flex min-h-full sm:block'>
      <div className='w-[210px] border-r pr-6 mr-6 border-r-gray py-10 shrink-0 sm:hidden'>
        {tabs.map(({id, tab}) =>
          <button
            key={id}
            className={
              clsx(
                'block font-bold mb-4 text-brown text-left leading-5 text-sm',
                'sm:px-3 sm:mb-0 sm:text-xs sm:min-w-[130px]',
                `${currentTab === id ? 'underline hover:text-brown cursor-default': 'hover:text-dblue'}`
              )}
            onClick={() => setCurrentTab(id)}
          >{tab}</button>
        )}
      </div>
      <div className='py-10 sm:py-7'>
        <h2 className='title-h3 sm:text-base'>{current?.content?.title}</h2>
        <div className='b-txt sm:text-sm'>{parse(current?.content?.text || '')}</div>
      </div>
    </div>
  )
};

export default TableDescribe;