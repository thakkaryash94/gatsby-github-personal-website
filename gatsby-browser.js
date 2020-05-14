import React from 'react'
import { ThemeContextProvider } from "./src/theme-context"
require("prismjs/themes/prism.css")

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
