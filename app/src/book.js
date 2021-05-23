import React from 'react'

const clickHandler = () => {
  alert('Hello World');
}

const complex = (author) => {
  alert(author);
}


const book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book' >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
      <button type='button' onClick={clickHandler} >Reference</button>
      <button type='button' onClick={() => complex(author)} >Complex</button>
    </article>
  );
}


export default book
