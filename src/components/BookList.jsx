import React, { Component } from 'react'

class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>The Way of Kings</li>
          <li>The Adventures of Tom Sawyer</li>
          <li>The Adventures of Huckleberry Finn</li>
          <li>The Prince and the Pauper</li>
        </ul>

      </div>
    )
  }
}


export default BookList;