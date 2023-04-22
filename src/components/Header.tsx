import { Box, Divider, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import logo from '../logo.png'
import axios from 'axios'

const url = 'http://loremricksum.com/api/?paragraphs=1&quotes=1'

export const Header: React.FC = () => {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      const { data } = await axios.get(url)
      console.log(data.data);
      setQuote(data.data[0])
    })()
  }, [])

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '350px',
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            height: '100%',
          }}
        >
          <Grid
            item
            xs={5}
          >
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              sx={{
                height: '100%',
              }}
            >
              <Grid item>
                <img src={logo} height={200}/>
              </Grid>

              <Grid
                item
                sx={{ mt: 2 }}
              >
                {quote}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  )
}
