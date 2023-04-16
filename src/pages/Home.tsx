import { Button, Container } from '@mui/material'
import { Header } from '../components/Header'

export const Home: React.FC = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ mt: 9 }}
    >
      <Header
        title='sup bro'
        description='this is a description'
        element={<Button fullWidth variant='contained'>Home page</Button>}
      />
    </Container>
  )
}
