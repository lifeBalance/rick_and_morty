import { AppBar, Box, Button, Container, Grid, Stack, Toolbar } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export const NavBar: React.FC = () => {
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
                <RouterLink to='/' />
                {/* <Typography>lol</Typography> */}
                lol
              </Grid>

              <Grid item>
                <Stack direction='row' spacing={2}>
                  <Button to='/login' component={RouterLink} variant='contained'>Login</Button>
                  <Button to='/register' component={RouterLink} variant='outlined'>Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
