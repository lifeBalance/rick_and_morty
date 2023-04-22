import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../api/character'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'

// Accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const [expanded, setExpanded] = useState<string | false>(false)
  const [character, setCharacter] = useState<Character | null>(null)

  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            >
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    color={`${expanded === 'panel1' ? 'primary.main' : 'white'}`} >
                    General Information
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>Species: {character!.species}</Typography>
                  <Typography>Gender: {character!.gender}</Typography>
                  <Typography>Status: {character!.status}</Typography>
                  <Typography>Location: {character!.location!.name}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={`${expanded === 'panel2' ? 'primary.main' : 'white'}`} >
                    Episodes
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  {character!.episode.length > 0 && character!.episode.map(e => <Typography>{e}</Typography>)}
                </AccordionDetails>
              </Accordion>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}
