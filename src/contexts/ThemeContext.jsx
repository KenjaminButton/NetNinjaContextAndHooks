import React from 'react'
import { createContext } from "react";

export const ThemeContext = createContext()

import React, { Component } from 'react'

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {syntax: '#555', ui: '#ddd', bg: '#eee'}
  }
  render() {
    return (
      <div>ThemeContextProvider</div>
    )
  }
}


export default ThemeContextProvider