import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='container mt-5'>
        <h1 className="row justify-content-center" style={{ fontWeight: 'bold' }}>Counter App (redux)</h1>
        <h2 className="row justify-content-center" style={{ fontWeight: 'bold' }}>Count: {count} </h2>
        <div className='row justify-content-center'>
            <div className='col-2 text-center'>
                <button className='btn btn-primary' onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className='col-2 text-center'>
                <button className='btn btn-primary' onClick={() => dispatch(increment())}>+</button>
            </div>
        </div> 
    </div>
  )
}
