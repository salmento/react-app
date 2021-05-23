import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 200 );
  };
  return (
    <>
      <section  style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h2>{value}</h2>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick= { reset }>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increment
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
};

export default UseStateCounter;