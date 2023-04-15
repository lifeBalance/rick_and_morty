import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'

type Credentials = {
  email: string
  password: string
}

const initialState: Credentials = {
  email: '',
  password: ''
}

export const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState)

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value, e.target.name)
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(credentials)
    setCredentials(initialState)
    // compare with local storage maybe?
  }

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper
            sx={{
              padding: '1.2em',
              borderRadius: '0.5em',
            }}
          >
            <Box
              component='form'
              onSubmit={handleSubmit}    
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Typography variant='h4'>Login</Typography>
              <TextField
                name='email'
                type='email'
                label='Email'
                required
                value={credentials.email}
                onChange={handleInput}
              />
              <TextField
                name='password'
                type='password'
                label='Password'
                required
                value={credentials.password}
                onChange={handleInput}
              />
              <Button
                type='submit'
                variant='contained'
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
