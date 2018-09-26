import React from 'react';
import Shelf from './shelf'


const Page = (props) => {
  const { bookshelf, searchButton } = props;
  return (

              // START BOOK PAGE
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>

                { /* START OF BOOKCASE */ }
                <div className="list-books-content">
                  <div>
                  {bookshelf.shelves.map(shelf => <Shelf shelf={ shelf } key={shelf.shelf}/> )}
                  </div>
                </div>
                { /* END OF BOOKCASE */ }

                { /* START SEARCH */ }
                <div className="open-search">
                  <a onClick={searchButton}>Add a book</a>
                </div>
                { /* END SEARCH */ }

              </div>
  )
}

export default Page
