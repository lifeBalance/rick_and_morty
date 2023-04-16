import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from '@mui/material'
import { Header } from '../components/Header'
import { ChangeEvent, useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [pageTotal, setPageTotal] = useState<number | undefined>()

  function handlePageChange(e: ChangeEvent<unknown>, value: number) {
    setPage(value)
  }

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      const { data } = await characters.getAll(page)
      // console.log(data)
      setPageTotal(data.info.pages)
      setCharacterList(data.results)
      setTimeout(() => setLoading(false), 500) // to be able to see spinner
    })()
  }, [page])

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
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : characterList && characterList?.length > 0 ? (
        <Grid
          container
          spacing={2}
          direction='row'
          my={2}
        >
          {characterList.map((c) => (
            <Grid
              item
              xs={3}
            >
              <CharacterCard
                fullName={c.name}
                image={c.image}
                gender={c.gender}
                species={c.species}
                livingStatus={c.status}
              />
            </Grid>
          ))}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={pageTotal}
              page={page}
              onChange={handlePageChange}
              variant='outlined'
              color='primary'
              size='large'
              sx={{marginBottom: 2}}
            />
          </Box>
        </Grid>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <div>No data available</div>
        </Box>
      )}
    </Container>
  )
}
