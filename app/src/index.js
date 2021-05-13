import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

const BookList = () => {
  return (
      <section className = 'booklist'> 
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </section>
  )
}

const Book = () => {  
  return (
    <article className = 'book'>
      <img 
        src="https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SX322_BO1,204,203,200_.jpg" 
      alt = ""/>
      <h1> American Marxism Hardcover  </h1>
      <h4> Mark R. Levin </h4>
    </article>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));


