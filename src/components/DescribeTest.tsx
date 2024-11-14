import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux'

const DescribeTest = () => {
  const describe = useSelector(state => state.content.describe);

  return (
    <div className='b-txt'>
      {parse(describe || '')}
    </div>
)};

export default DescribeTest;