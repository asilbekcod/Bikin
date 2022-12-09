import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import rasm from "../../assets/img/hero-img.png"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <Box id='home'>

            <Box sx={{ p: "70px 12px 0", m: { lg: "0 60px", md: "0 32px", sm: "0 24px" }, }}>
                <Fade bottom>
                <Box sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
                    <Typography sx={{ textAlign: "center", fontSize: { lg: "48px", md: "48px", sm: "36px", xs: "36px" }, fontWeight: "700", lineHeight: { lg: "56px", md: "56px", sm: "42px" }, color: "#2d405f", fontFamily: '"Krub", sans-serif', width: { lg: "60%", md: "60%", sm: "100%" } }}>
                        Build Better Websites With Bikin
                    </Typography>
                </Box>
                <Typography sx={{ mt: "15px", fontSize: { lg: "25px", md: "25px", sm: "20px", xs: "20px" }, color: "#2d405f", fontFamily: '"Krub", sans-serif', textAlign: "center", lineHeight: "1.2" }}>
                    We are team of talented designers making websites with Bootstrap
                </Typography>
                <Typography sx={{ justifyContent: "center", display: "flex" }}>
                    <Button sx={{ width: "160px", height: "40px", background: "#3b4ef8", color: "#fff", mt: "25px", fontWeight: "500", transition: ".5s", letterSpacing: "1px", textTransform: "capitalize", fontSize: "17px", fontFamily: '"Krub", sans-serif' }}>
                        Get Started
                    </Button>
                </Typography>
                </Fade>
                <Zoom>
                    <Box sx={{ justifyContent: "center", display: "flex", }}>
                        <Typography sx={{ m: "40px 0 70px ", maxWidth: { lg: "60%", md: "60%", sm: "90%" } }}>
                            <img src={rasm} alt="" style={{ width: "100%" }} />
                        </Typography>
                    </Box>
                </Zoom>
            </Box>

        </Box>
    )
}

export default Home