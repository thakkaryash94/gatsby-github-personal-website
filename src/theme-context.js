import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#2f363d',
  },
}

const initialState = {
  mode: 'LIGHT',
  theme: themes.light
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: themes.dark, mode: 'DARK' }
  }
}

const ThemeContext = React.createContext({
  state: initialState,
  dispatch: () => { }
})

function ThemeContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
  )
}

const ThemeContextConsumer = ThemeContext.Consumer

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer }
