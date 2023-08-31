import { createContext, useState, useReducer } from "react"
import { bookReducer } from "../reducers/bookReducer"



export const BookContext = createContext()

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   {title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', id: 1},
  //   {title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', id: 2},
  // ])

  const [books, dispatch] = useReducer(bookReducer, [])

  // // Add a new book to data
  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuidv4() }])
  // }

  // // Remove a book from data
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id))
  // }

  return (
    // <BookContext.Provider value={{books, addBook, removeBook}}>
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

