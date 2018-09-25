
import React from 'react'
import Book from './book'

const Shelf = (props) => {
  const { type, books } = props.shelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid" key={books.type}>
          {books.map(book=> <Book book={book} key={book.type}/>)}
        </ol>
      </div>
    </div>
  )
}
export default Shelf
