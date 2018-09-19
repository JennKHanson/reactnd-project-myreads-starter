
import React from 'react'
import Book from './book'

const Shelf = (props) => {
  const { shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.books.map(book=> <Book book={book}/>)}
        </ol>
      </div>
    </div>
  )
}
export default Shelf
