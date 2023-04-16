import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../api/character'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'

type Character = {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: { name: string; url: string }
  name: string
  origin: { name: string; url: string }
  species: string
  status: string
  type: string
  url: string
}

export const Character: React.FC = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<Character | null>(null)
  console.log('yoyo', id)

  useEffect(() => {
    ;(async function (id: string | undefined) {
      try {
        setLoading(true)
        const { data } = await characters.getById(id)
        setCharacter(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })(id)
  }, [])
  return (
    <Container maxWidth='md'>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card sx={{ maxWidth: 345, margin: 'auto', mt: 10 }}>
          <CardMedia
            component='img'
            width='100%'
            image={character!.image}
            alt='Rick'
          />
          <CardContent>
            <Typography variant='h4'>{character!.name}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Stack
              direction='column'
              gap={2}
            >
              <Typography>Species: {character!.species}</Typography>
              <Typography>Gender: {character!.gender}</Typography>
              <Typography>Status: {character!.status}</Typography>
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              size='small'
              fullWidth
            >
              clicketty click
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  )
}
