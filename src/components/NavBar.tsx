import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../logo.png'
import { useLoginStore } from '../store/store'

export const NavBar: React.FC = () => {
  const isLoggedIn = useLoginStore(state => state.isLoggedIn)
  const logout = useLoginStore(state => state.logout)

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position='fixed'>
        <Toolbar>
          <Container maxWidth='xl'>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Grid item>
                <RouterLink to='/'>
                  <img
                    src={logo}
                    height={60}
                  />
                </RouterLink>
              </Grid>

              <Grid item>
                <Stack
                  direction='row'
                  spacing={2}
                >
                  {!isLoggedIn ? (
                    <>
                      <Button
                        to='/login'
                        component={RouterLink}
                        variant='contained'
                      >
                        Login
                      </Button>
                      <Button
                        to='/register'
                        component={RouterLink}
                        variant='outlined'
                      >
                        Register
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={logout}
                      variant='outlined'
                      color='error'
                    >
                      Log out
                    </Button>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
