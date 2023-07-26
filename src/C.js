import React from 'react';
import { useSelector } from 'react-redux';

const C = () => {
  const count = useSelector((state) => state.counter.value);

  return (
      <h2 className="row justify-content-center" style={{ fontWeight: 'bold' }}>Count: {count}</h2>
  );
};

export default C;
