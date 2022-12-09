import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material"
import { AboutMap } from '../../assets/aboutmap'
import rasm1 from "../../assets/img/clients/client-1.png"
import rasm2 from "../../assets/img/clients/client-2.png"
import rasm3 from "../../assets/img/clients/client-3.png"
import rasm4 from "../../assets/img/clients/client-4.png"
import rasm5 from "../../assets/img/clients/client-5.png"
import rasm6 from "../../assets/img/clients/client-6.png"
function About() {
    return (
        <Box id='about'>

            <Box sx={{ width: "100%", background: "#466393", height: "auto", p: "60px 0", }}>
                <Box sx={{ m: { lg: "0 60px", md: "0 32px", sm: "0 24px" , xs:"0px"}, }}>
                    <Grid container spacing={2} sx={{ textAlign: { lg: "start", md: "start", sm: "center", xs: "center", } }}>
                        <Grid item lg={5} md={12} sm={12} xs={12} sx={{ p: "" }}>
                            <Box sx={{ p: { lg: "30px 30px 30px 0", md: "30px 30px 30px 0" } }}>
                                <Typography sx={{
                                    fontSize: "34px",
                                    fontWeight: "700",
                                    color: "white",
                                    mb: "30px",
                                    fontFamily: '"Krub", sans-serif',
                                    lineHeight: "1.2",
                                    pl:{lg:'0', md:'0', sm:'0', xs:'15px'}
                                }}>
                                    Voluptatem dignissimos provident quasi
                                </Typography>

                                <Typography sx={{ mb: "30px", fontFamily: '"Open Sans", sans-serif', color: "#fff", fontSize: "16px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </Typography>
                                <Typography>
                                    <Button sx={{ background: "rgba(255, 255, 255, 0.05)", textTransform: "capitalize", width: "140px", borderRadius: "50px", fontSize: "16px", transition: "0.3s", color: "#fff" }}>
                                        About us
                                    </Button>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={7} md={12} sx={{display:'flex', justifyContent:'center', }}>
                            <Grid container spacing={0.5}  >

                                {AboutMap.map((v) => (
                                    <Grid item lg={6} md={6} sm={6} xs={12} >
                                        <Box sx={{ width: "100%", height: "100%", mt: "20px",  fontFamily: '"Open Sans", sans-serif', color: "white" }}>
                                            <Typography sx={{ fontSize: "40px", color: "#B6BDFC" }}>
                                                {v.icon}
                                            </Typography>
                                            <Typography sx={{ fontSize: "20px", fontWeight: "700", m: "0 0 10px 0" }}>
                                                {v.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {v.text}
                                            </Typography>

                                        </Box>


                                    </Grid>
                                ))}

                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ 
                width: "100%", 
                maxHeight: {xl:'100px',lg:'100px',md:'100px',sm:'auto',xs:'auto'},
                 background: "#f6f7ff",
                  display:"flex", 
                  justifyContent:"center", 
                  alignItems:"center",
                    }}>
                <Box sx={{ m: { lg: "0 60px", md: "0 32px", sm: "0 24px" , xs:" 0 12px"},width:"90%", }}>
                <Grid container spacing={0}  sx={{justifyContent:"center", display:"flex", p:"20px 0 "}}>
                    <Grid item lg={1.9} md={1.9} sm={4} xs={6}  sx={{textAlign:"center"}}>
                        <img src={rasm1} width={'85px'} alt="" id='aboutHomHov' />
                    </Grid>
                    <Grid item lg={1.9} md={1.9} sm={4} xs={6}  sx={{textAlign:"center"}}>
                    <img src={rasm2}  width={'85px'}  alt="" id='aboutHomHov' />

                    </Grid>
                    <Grid item lg={1.9} md={1.9} sm={4} xs={6}  sx={{textAlign:"center"}}>
                    <img src={rasm3}  width={'85px'}  alt="" id='aboutHomHov' />

                    </Grid>
                    <Grid item lg={1.9} md={1.9} sm={4} xs={6}  sx={{textAlign:"center"}}>
                    <img src={rasm4}  width={'85px'}  alt="" id='aboutHomHov' />

                    </Grid>
                    <Grid item lg={1.9} md={1.9} sm={4} xs={6}  sx={{textAlign:"center"}}>
                    <img src={rasm5}  width={'85px'}  alt="" id='aboutHomHov' />

                    </Grid>
                    <Grid item lg={2} s md={1.9} sm={4} xs={6} sx={{textAlign:"center"}}>
                    <img src={rasm6}  width={'85px'}  alt="" id='aboutHomHov' />

                    </Grid>
                </Grid>
            </Box>
            </Box>

        </Box>
    )
}

export default About