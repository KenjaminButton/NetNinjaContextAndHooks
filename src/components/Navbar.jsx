import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // Not the "Provider", but the const ThemeContext = createContext()
  // static contextType = ThemeContext;
  
  render() {
    // console.log(this.context)
    
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const {isLightTheme, light, dark} = themeContext
          const theme = isLightTheme ? light : dark
          
          return (        
            <nav style={{background: theme.ui, color: theme.syntax}}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Surprise Me</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    )
  }
}


export default Navbar;