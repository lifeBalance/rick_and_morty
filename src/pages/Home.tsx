import { Button, Container } from "@mui/material"
import { useNotification } from "../context/NotificationCtx"

export const Home: React.FC = () => {
  const { getError, getSuccess } = useNotification()

  const handleClick = () => {
    // getError('lalala')
    getSuccess('lalala')
  }

  return (
    <Container
      maxWidth='xl'
      sx={{ mt: 9 }}
    >
      <Button variant='contained' onClick={handleClick}>Home page</Button>
    </Container>
  )
}
