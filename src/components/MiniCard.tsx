import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

type CardProps = {
  id: number,
  image: string,
  fullName: string,
  species: string,
  gender: string,
  livingStatus: string,
}

export const CharacterCard: React.FC<CardProps> = ({id, image, fullName, species, gender, livingStatus}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image={image}
        alt='Rick'
      />
      <CardContent>
        <Typography variant='h4'>{fullName}</Typography>
        <Divider sx={{ marginY: 2 }}/>
        <Stack direction='column' gap={2}>
          <Typography>Species: {species}</Typography>
          <Typography>Gender: {gender}</Typography>
          <Typography>Status: {livingStatus}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button to={`/character/${id}`} component={RouterLink} variant='contained' size='small' fullWidth>clicketty click</Button>
      </CardActions>
    </Card>
  )
}
