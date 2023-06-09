import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from '@mui/material'
import { Header } from '../components/Header'
import { ChangeEvent, useEffect, useState } from 'react'
import { characters } from '../api/character'
import { CharacterCard } from '../components/MiniCard'
import { useLoginStore } from '../store/store'

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
  const isLoggedIn = useLoginStore(state => state.isLoggedIn)

  function handlePageChange(e: ChangeEvent<unknown>, value: number) {
    setPage(value)
  }

  useEffect(() => {
    if (!isLoggedIn) return

    (async function () {
      setLoading(true)
      const { data } = await characters.getAll(page)
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
      {!isLoggedIn && 
        <Header />}

      {isLoggedIn && loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : isLoggedIn && characterList && characterList?.length > 0 ? (
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
              key={c.id}
            >
              <CharacterCard
                id={c.id}
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
        isLoggedIn &&
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <div>No data available</div>
        </Box>
      )}
    </Container>
  )
}
