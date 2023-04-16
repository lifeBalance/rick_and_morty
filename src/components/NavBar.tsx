import { AppBar, Box, Button, Container, Grid, Stack, Toolbar } from '@mui/material'
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
                {/* <Typography>lol</Typography> */}
                lol
              </Grid>

              <Grid item>
                <Stack direction='row' spacing={2}>
                  <Button variant='contained'>Login</Button>
                  <Button variant='outlined'>Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}