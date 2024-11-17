import React from 'react';
import parse from 'html-react-parser';
import { useAppSelector } from '../hooks/useStoreHooks';

const DescribeTest = () => {
  const describe = useAppSelector(state => state.content.describe);

  return <div className="b-txt">{parse(describe || '')}</div>;
};

export default DescribeTest;
