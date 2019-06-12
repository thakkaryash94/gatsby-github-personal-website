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

const windowGlobal = typeof window !== 'undefined' && window

const localTheme = windowGlobal.localStorage && windowGlobal.localStorage.getItem('theme') || 'light'

const initialState = {
  style: localTheme,
  theme: themes[localTheme]
}

const reducer = (state, {value, type}) => {
  windowGlobal.localStorage && windowGlobal.localStorage.setItem('theme', value)
  switch (type) {
    case 'TOGGLE_THEME':
      return state.style === 'light' ? { theme: themes.dark, style: 'dark' } : { theme: themes.light, style: 'light' }
    case 'CHANGE_THEME':
      return { theme: themes[value], style: value }
    default:
      return state
  }
}

const ThemeContext = createContext({
  state: initialState,
  dispatch: () => { }
})

function ThemeContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }