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
import { useNotification } from '../context/NotificationCtx'
import { loginFormSchema } from '../utils/validateForm'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { useLoginStore } from '../store/store'

type Credentials = {
  email: string
  password: string
}

type CredentialsType = z.infer<typeof loginFormSchema>

const initialState: Credentials = {
  email: '',
  password: '',
}

export const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>(initialState)
  const { getError, getSuccess } = useNotification()
  const navigate = useNavigate()
  const login = useLoginStore(state => state.login)

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value, e.target.name)
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      // validate data entered by the user
      loginFormSchema.parse(credentials)

      // Clear form if no validation errors 🤔 (no point if I'm redirecting)
      // setCredentials(initialState)

      // Get credentials stored in Sessiong storage during Registration.
      const [registeredEmail, registeredPassword] = sessionStorage.getItem('Rick_and_Morty')?.split(':') || []

      if (registeredEmail === credentials.email && registeredPassword === credentials.password) {
        // Set global state
        login()

        // Show a toasty
        getSuccess('Welcome back little Bitch!')

        // redirect to main page
        navigate('/')
      } else {
        getError('Wrong Credentials')
        navigate('/')
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show a toast if there were validation errors
        getError(error.issues[0].message)
        // console.log(error.issues[0].message)
      }
    }
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
