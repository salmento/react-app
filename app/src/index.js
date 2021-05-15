import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup vars
const firstBook = {
  title : "American Marxism Hardcover",
  author: "Mark R. Levin",
  img : "https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SX322_BO1,204,203,200_.jpg",
}
const secondBook = {
  title: "Oh, the Places You'll Go! ",
  author: "Dr. Seuss",
  img: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX376_BO1,204,203,200_.jpg",
}


const BookList = () => {
  return (
      <section className = 'booklist'> 
      <Book img= {firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
      </section>
  )
}

const Book = ({img, title, author}) => {  
  return (
    <article className = 'book'>
      <img src={img} alt = ""/>
      <h1>{title}</h1>
      <h4> {author}</h4>
    </article>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));


