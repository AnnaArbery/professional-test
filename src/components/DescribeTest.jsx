import React from 'react';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux'

const DescribeTest = () => {
  const {  content } = useSelector(state => state.content.describe);

  return (
    <div className='b-txt'>
      {parse(content || '')}
    </div>
)};

export default DescribeTest;