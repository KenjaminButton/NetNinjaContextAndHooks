import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>{(context) => {
//         const {isLightTheme, light, dark} = context
//         const theme = isLightTheme ? light : dark
//         return (
//           <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
//             <ul>
//               <li style={{background: theme.ui}}>The Way of Kings</li>
//               <li style={{background: theme.ui}}>The Adventures of Tom Sawyer</li>
//               <li style={{background: theme.ui}}>The Adventures of Huckleberry Finn</li>
//               <li style={{background: theme.ui}}>The Prince and the Pauper</li>
//             </ul>
//           </div>
//         )
//       }}
//       </ThemeContext.Consumer>
//     )
//   }
// }

const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  const {books} = useContext(BookContext)

  return (
    <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
      <ul>
        {/* Create a context for these hard coded books */}        
        {/* <li style={{background: theme.ui}}>The Way of Kings</li>
        <li style={{background: theme.ui}}>The Adventures of Tom Sawyer</li>
        <li style={{background: theme.ui}}>The Adventures of Huckleberry Finn</li>
        <li style={{background: theme.ui}}>The Prince and the Pauper</li> */}

        {books.map(book => {
          return (
            <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
          )
        })}

      </ul>
    </div>
  )
}

export default BookList;