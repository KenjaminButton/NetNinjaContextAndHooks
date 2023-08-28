import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', id: 1},
    {title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', id: 2},
  ])
  // Add a new book to data
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuidv4() }])
  }

  // Remove a book from data
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

