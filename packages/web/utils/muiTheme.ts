import { grey } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
