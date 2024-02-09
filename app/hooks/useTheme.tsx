import { useContext } from 'react'

import { ThemeContext } from '../assets/providers/theme/ThemeProvider'

export const useTheme = () => useContext(ThemeContext)
