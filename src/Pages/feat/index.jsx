import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material"
import { FeatMap } from '../../assets/featmap'

function Feat() {
  return (
    <Box sx={{ width: "100%", background: "#FFF", height: "auto", p: "60px 0", }}>
      <Box sx={{ m: { lg: "0 60px", md: "0 32px", sm: "0 24px", xs: '0px 12px' }, }}>

        <Grid container spacing={0} >
          {FeatMap.map((v) => (
            <Grid item lg={4} md={4} sm={6} xs={12} sx={{mt:"0%", p:{lg:"40px", md:"40px",},
            borderLeft:{xl:(v.borderl),lg:(v.borderl),md:(v.borderl),sm: (v.borderlsm) , xs:'none'},
            borderBottom:{xl:(v.borderb) ,lg:(v.borderb),md:(v.borbmd),sm: (v.borbsm),xs: (v.borderxs)},
            }}>
              <Box >
                <Typography sx={{color:"#3b4ef8", fontSize:"24px", fontWeight:"400"}}>
                  {v.number}
                </Typography >
                <Typography sx={{fontSize:"28px", fontWeight:"400", m:"20px 0", color:"#2d405f"}}>
                  {v.name}
                </Typography>
                <Typography sx={{fontSoze:"15px", color:"#aaaaaa"}}>
                  {v.text}
                </Typography>
              </Box>

            </Grid>
          ))}

        </Grid>
      </Box>
    </Box>
  )
}

export default Feat