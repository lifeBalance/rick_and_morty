import { Button, Container } from "@mui/material"

export const Home: React.FC = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ mt: 9 }}
    >
      <Button variant='contained'>Home page</Button>
    </Container>
  )
}
