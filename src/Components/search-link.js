
/**
 * search-link.js --> Button that links to Search Page
 */

import React from 'react'
import { Link } from 'react-router-dom'

class SearchLink extends React.Component {
render(){
  return(
    <div className="open-search">
      <Link
      to="/searchpage">
      Add a book</Link>
    </div>
  )}
}

export default SearchLink
