import React from "react"
import Layout from '../components/Layout'
import Button from '@mui/material/Button'
import { Typography } from "@mui/material"
 

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Typography color='secondary' variant="h1">Company name</Typography>
      <h2>Testing</h2>
      <Button variant="contained" onClick={()=>alert('Testing')}>Button 1</Button>
    </Layout>
  )
}

export default IndexPage
