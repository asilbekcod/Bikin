import React from "react"
import { Box, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Servising } from "../../assets/servis/servis";

function Servis() {
    return (
        <>
            <Box id="servise" sx={{
                paddingBottom: "80px",
                overflow: "hidden",
                background: "#2d405f"
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={11} md={11} sm={10.8} xs={11} spacing={0}>
                        <Box sx={{ paddingBottom: "30px" }}>
                            <Box sx={{ justifyContent: "center", display: "flex",marginTop:"50px" }}>
                                <Typography sx={{
                                    fontSize: "32px ",
                                    fontWeight: "bold",
                                    mb: "15px",
                                    position: "relative",
                                    color: "#fff"

                                }}>
                                    Services
                                </Typography>
                            </Box>
                            <Box sx={{ justifyContent: "center", display: "flex" }}>
                                <Typography sx={{
                                    width: "50px",
                                    height: "3px",
                                    background: "rgba(255, 255, 255, 0.2)"
                                }}></Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    textAlign: "center",
                                    mt: "15px",
                                    color: "#000",
                                    color: "#fff"
                                }}>
                                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={3} >
                {Servising.map((val) => (
                    <Grid item xl={2.6} lg={2.8} md={2.8} sm={5.6} xs={12}>
                        <Box sx={{
                            padding: "55px 30px",
                            position: "relative",
                            overflow: "hidden",
                            background: "#fff",
                            transition: "all 0.3s",
                            borderRadius: "5px",
                            textAlign: "center",
                            "&:hover":{
                                transform: "scale(1.08)",
                            }
                        }}>
                            <Box sx={{ marginBottom: "35px" }}>
                                <i style={{
                                    fontSize: "30px",
                                    lineHeight: 1,
                                    color: "#2d405f",
                                    background: "#eff2f8",
                                    padding: "19px",
                                    borderRadius: "50px",
                                    transition: "all 0.3s",
                                }}>
                                 {val.icon}
                                </i>
                            </Box>
                            <Typography variant="h4" sx={{
                                fontWeight: "700",
                                marginBottom: "15px",
                                fontSize: "18px",
                            }}>
                                <Link sx={{
                                    color: "#2d405f",
                                    transition: "0.3s",
                                    textDecoration: "none",
                                    "&:hover":{
                                        color:"#4e6fa4"
                                    }
                                }}>
                                   {val.name}
                                </Link>
                            </Typography>
                            <Typography sx={{
                                fontSize: "15px",
                                lineHeight: "28px",
                                marginHottom: 0,
                            }}>
                                {val.text}

                            </Typography>

                        </Box>
                    </Grid>
                ))}

                </Grid>
            </Box>
        </>
    )
}
export default Servis
