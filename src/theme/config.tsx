import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

enum ThemeOptions {
  BG = '#12181b',
  LIME = '#C8FA5F',
  FONT_GLOBAL = "'JetBrains Mono', monospace"
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: ThemeOptions.BG,
    },
    primary: {
      main:ThemeOptions.LIME
    }
  },
  typography: {
    fontFamily: ThemeOptions.FONT_GLOBAL
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em'
        }
      }
    }
  }
})

export const ThemeConfig: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  )
}
