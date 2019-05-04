import React from 'react'
import { ThemeContextProvider } from "./src/theme-context"

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
