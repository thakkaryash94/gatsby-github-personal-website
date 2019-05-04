import React, { useReducer, createContext } from 'react'

export const themes = {
  light: {
    background: '#ffffff',
    iconColor: '#24292e'
  },
  dark: {
    background: '#2f363d',
    iconColor: '#ffffff'
  },
}

const localTheme = localStorage.getItem('theme') || 'light'

const initialState = {
  style: localTheme,
  theme: themes[`${localTheme}`]
}

const reducer = (state, action) => {
  localStorage.setItem('theme', action.value)
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state.style === 'light' ? { theme: themes.dark, style: 'dark' } : { theme: themes.light, style: 'light' }
    case 'CHANGE_THEME':
      return action.value === 'light' ? { theme: themes.light, style: 'light' } : { theme: themes.dark, style: 'dark' }
    default:
      return { theme: themes.light, style: 'light' }
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
