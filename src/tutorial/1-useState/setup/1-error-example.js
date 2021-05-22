import React, { useState }from 'react';



const Example = () => {
  
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change titlle</button>
    </React.Fragment>

  )
};

export default Example;
