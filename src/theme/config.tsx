import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

enum ThemeOptions {
  BG = '#12181b',
  LIME = '#C8FA5F',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  ERROR_MAIN = '#F44336',
  BG_ERROR_MAIN = 'rgba(59,15,15, 0.3)',
  SUCCESS_MAIN = '#C8FA5F',
  BG_SUCCESS_MAIN = 'rgba(135,175,71, 0.3)',
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
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em'
        }
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemeOptions.ERROR_MAIN}`,
          background: ThemeOptions.BG_ERROR_MAIN
        },
        standardSuccess: {
          border: `1px solid ${ThemeOptions.SUCCESS_MAIN}`,
          background: ThemeOptions.BG_SUCCESS_MAIN
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
