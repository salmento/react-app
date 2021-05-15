import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup vars
const Books = [
{
  title: "American Marxism Hardcover",
  author: "Mark R. Levin",
  img: "https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SX322_BO1,204,203,200_.jpg",
},
{
  title: "Oh, the Places You'll Go! ",
  author: "Dr. Seuss",
  img: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX376_BO1,204,203,200_.jpg",
}
]
const BookList = () => {
  return (
    <section className='booklist'>
      {Books.map(book => <Book book={book} />)}
      
    </section>
  )
}
//children is default name to access childrens on props parament
const Book = (props ) => {
  const { img, title, author } =props.book;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
    </article>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'));


