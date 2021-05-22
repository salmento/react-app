import React, { useState } from 'react';
import { data } from '../../../data';


const Example = () => {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newData = people.filter(person => person.id !== id);
    setPeople(newData);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h2>{name}</h2>
            <button type='button' className='btn' onClick={() =>removeItem(id)}>Remover</button>
          </div>
        );
      })
      }
      <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
    </>
  )
};

export default Example;
