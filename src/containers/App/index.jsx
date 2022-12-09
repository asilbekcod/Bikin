import { Box } from '@mui/material'
import React from 'react'
import Contact from '../../Pages/Contact/Contact'
import Doctors from '../../Pages/Doctors/Doctors'
import Futter from '../../components/Futter/Futter'
import Servis from '../../Pages/Servis/Servis'
import Features from '../../Pages/Features/Features'
import Navbar from '../../components/Navbar/index'
import Portfolio from '../../Pages/Portfolio/Portfolio'
import Home from '../../Pages/home/index'
import About from '../../Pages/about/index'
export default function App() {
  return (
    <Box  >
      <Box sx={{
        marginBottom: { xl: '75px', lg: '75px', md: '75px', sm: '64px', xs: '64px' }
      }}>
        <Navbar />
      </Box>
      <Home />
      <About />
      <Features />
      <Servis />
      <Portfolio />
      <Doctors />
      <Contact />
      <Futter />

    </Box>

  )
}

