import {createTheme} from '@mui/material'
import { green, purple } from '@mui/material/colors'

const theme = createTheme({
    palette:{
        primary:{
            main:purple[500]
        },
        secondary:{
            main:green['A100']
        }
    }
})

export default theme;