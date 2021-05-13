import React from 'react';
import ReactDom from 'react-dom';

const BookList = () => {
  return (
      <section> 
        <Book/>
      </section>
  )
}

const Book = () => {  
  return (
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
}

const Image = () => <img 
  src="https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SX322_BO1,204,203,200_.jpg" 
  alt = ""/>

const Author = () =>  <h1> Mark R. Levin </h1>

const Title = () => <h1> American Marxism Hardcover  </h1>

ReactDom.render(<BookList/>, document.getElementById('root'));


