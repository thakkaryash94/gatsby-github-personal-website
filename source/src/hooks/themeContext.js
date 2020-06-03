import { useContext } from 'react'
import { ThemeContext } from '../theme-context'

const useThemeContext = () => {
  const { state: { theme, style }, dispatch } = useContext(ThemeContext)

  const setTheme = theme => {
    dispatch({ type: 'CHANGE_THEME', value: theme })
  }
  return {
    theme,
    style,
    setTheme,
  }
}

export default useThemeContext
