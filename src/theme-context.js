import React, { useReducer, createContext } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff',
  },
  dark: {
    foreground: '#ffffff',
    background: '#2f363d',
  },
}

const initialState = {
  style: 'DARK',
  theme: themes.dark
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state.style === 'LIGHT' ? { theme: themes.dark, style: 'DARK' } : { theme: themes.light, style: 'LIGHT' }
  }
}

const ThemeContext = createContext({
  state: initialState,
  dispatch: () => { }
})

function ThemeContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
  )
}

const ThemeContextConsumer = ThemeContext.Consumer

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer }
