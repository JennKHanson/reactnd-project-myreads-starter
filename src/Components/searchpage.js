import React from 'react'
import Book from './books'

class SearchPage extends React.Component {
  state = {
    query: '',
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    console.log(this.props.books)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            />


          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.query}</ol>
        </div>
      </div>
    )
  }

}
export default SearchPage
