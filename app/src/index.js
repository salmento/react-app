import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css'

// Setup vars
const Books = [
  { 
    id:1,
    title: "American Marxism Hardcover",
    author: "Mark R. Levin",
    img: "https://images-na.ssl-images-amazon.com/images/I/51QyOJtK0xS._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Oh, the Places You'll Go! ",
    author: "Dr. Seuss",
    img: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX376_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "What Happened to You?: Conversations on Trauma, Resilience, and Healing ",
    author: "Oprah Winfrey  && Bruce D. Perry",
    img: "https://images-na.ssl-images-amazon.com/images/I/31LXam5J2IL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  }
]
const BookList = () => {
  return (
    <section className='booklist'>
      {Books.map(book => <Book key={book.id} {...book} />)}

    </section>
  )
}
//children is default name to access childrens on props parament
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
    </article>
  );
}


ReactDom.render(<BookList />, document.getElementById('root'));


