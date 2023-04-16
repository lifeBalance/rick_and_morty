import { Button, Container, Grid } from '@mui/material'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { characters } from '../api/character'
import { CharacterCard } from '../components/Card'

type Character = {
  created: Date
  episode: string[]
  gender: string
  id: number
  image: string
  location: { name: string; url: string }
  name: 'string'
  origin: { name: string; url: string }
  species: 'string'
  status: 'string'
  type: 'string'
  url: 'string'
}

export const Home: React.FC = () => {
  const [characterList, setCharacterList] = useState<Character[] | null>(null)

  useEffect(() => {
    ;(async function () {
      const { data } = await characters.getAll(1)
      setCharacterList(data.results)
      console.log(data.results)
    })()
  }, [])

  return (
    <Container
      maxWidth='xl'
      sx={{ mt: 9 }}
    >
      <Header
        title='sup bro'
        description='this is a description'
        element={
          <Button
            fullWidth
            variant='contained'
          >
            Home page
          </Button>
        }
      />
      {characterList && characterList?.length > 0 ? (
        <Grid container spacing={2} direction='row'>
          {characterList.map((c) => (
            <Grid item xs={3}>
              <CharacterCard
                fullName={c.name}
                image={c.image}
                gender={c.gender}
                species={c.species}
                livingStatus={c.status}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No data available</div>
      )}
    </Container>
  )
}
