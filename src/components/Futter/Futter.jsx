import React from "react"
import { Box, Button, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Futlink, Futtext, Futtext2 } from "../../assets/futter/futter";



function Futter() {
    return (
        <>
            <Box sx={{
                background: "#f1f3ff",
                padding: "0 0 30px 0",
                color: "#444444",
                fontSize: "14px",
                boxShadow: " 0px 2px 15px rgb(0 0 0 / 10%)"
            }}>
                <Box sx={{
                    background: "#fff",
                    padding: "60px 0 30px 0",
                    marginBottom: "30px"
                }}>
                    <Grid container justifyContent="center" textAlign="start">
                        <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11} spacing={0}>
                            <Box sx={{ marginBottom: "10px" }}>
                                <Typography variant="h3" sx={{
                                    fontSize: "28px",
                                    margin: "0 0 10px 0",
                                    padding: "2px 0 2px 0",
                                    lineHeight: 1,
                                    fontWeight: 500,
                                    color: "#2d405f"
                                }}>
                                    Bikin
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    marginBottom: "15px",
                                    color: "#4e6fa4"
                                }}>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xl={2} lg={2} md={2} sm={5.3} xs={11} spacing={0} sx={{ marginBottom: "30px" }}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "12px",
                                color: "#2d405f"
                            }}>
                                Useful Links
                            </Typography>
                            {Futtext.map((val) => (
                                <Typography sx={{
                                    padding: "10px 0",
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <i style={{
                                        paddingRight: "5px",
                                        color: "#6c7afa",
                                        fontSize: "13px",
                                        lineHeight: 1,
                                    }}>{val.icon}</i>
                                    <Link href="#" sx={{
                                        color: "#777777",
                                        transition: "0.3s",
                                        display: "inline-block",
                                        lineHeight: 1,
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        "&:hover": {
                                            color: "#3b4ef8"
                                        }
                                    }}>
                                        {val.name}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xl={2.4} lg={2.5} md={2.5} sm={5.4} xs={11} spacing={0} sx={{ marginBottom: "30px" }}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "12px",
                                color: "#2d405f"
                            }}>
                                Our Services
                            </Typography>
                            {Futtext2.map((val) => (
                                <Typography sx={{
                                    padding: "10px 0",
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <i style={{
                                        paddingRight: "5px",
                                        color: "#6c7afa",
                                        fontSize: "13px",
                                        lineHeight: 1,
                                    }}>{val.icon}</i>
                                    <Link href="#" sx={{
                                        color: "#777777",
                                        transition: "0.3s",
                                        display: "inline-block",
                                        lineHeight: 1,
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        "&:hover": {
                                            color: "#3b4ef8"
                                        }
                                    }}>
                                        {val.name}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xl={3.2} lg={3.2} md={3.5} sm={5.3} xs={11} sx={{ marginBottom: "10px" }}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "18px",
                                color: "#2d405f"
                            }}>
                                Our Newsletter
                            </Typography>
                            <Typography sx={{
                                color: "#555555",
                                fontSize: "14px",
                                color: "#2d405f"
                            }}>
                                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                            </Typography>
                            <Typography sx={{
                                marginTop: "30px",
                                background: "#fff",
                                padding: "6px 10px",
                                position: "relative",
                                border: "1px solid #9da7fc",
                                borderRadius: "5px"
                            }}>
                                <input type="email" name="email" style={{
                                    border: "0",
                                    padding: "4px",
                                    width: "calc(100% - 110px)",
                                    lineHeight: "inherit"
                                }} />
                                <Link sx={{
                                    position: "absolute",
                                    top: "-1px",
                                    right: "-1px",
                                    bottom: "-1px",
                                    background: "none",
                                    fontSize: "16px",
                                    padding: "8px 20px",
                                    background: "#3b4ef8",
                                    color: "#fff",
                                    transition: "0.3s",
                                    borderRadius: "0 4px 4px 0",
                                    textDecoration: "none",
                                    borderRadius: "0 5px 5px 0",
                                    boxShadow: "0px 2px 15px rgb(0 0 0 / 10%)",
                                    "&:hover": {
                                        background: "#0a22f6"
                                    }
                                }}>
                                    Subscribe
                                </Link>
                            </Typography>
                        </Grid>


                    </Grid>
                </Box>
                <Box sx={{ paddingtop: "6px", }}>
                    <Grid container justifyContent="center" sx={{textAlign:{xl:"start",lg:"start",md:"start",sm:"start",xs:"center"}}}>
                        <Grid item xl={5} lg={5.2} md={5.3} sm={5.4} xs={11} spacing={0} sx={{marginBottom:"10px"}}>
                            <Typography sx={{ fontSize: "14px", }}>
                                &copy; Copyright <strong><span>Bikin</span></strong>. All Rights Reserved
                            </Typography>
                            <Typography sx={{
                                paddingTop: "5px",
                                fontSize: "13px",
                            }}>
                                Designed by
                                <Link href="#" sx={{
                                    color: "#3b4ef8",
                                    textDecoration: "none",
                                    "&:hover": {
                                        color: "#6c7afa"
                                    }
                                }}>BootstrapMade</Link>
                            </Typography>
                        </Grid>
                        <Grid item xl={5} lg={5.2} md={5.3} sm={5.4} xs={11} spacing={0}>
                            <Grid container sx={{justifyContent:{xl:"right",lg:"right",md:"right",sm:"right",xs:"center"}}}>
                                {Futlink.map((val) => (
                                    <Grid item xl={0.8} lg={1} md={1.2} sm={1.5} xs={1.3} spacing={0} sx={{ marginBottom: "0px" }}>
                                        <Link href="#" sx={{
                                            fontSize: "14px",
                                            display: "inline-block",
                                            background: "#e7eafe",
                                            color: "#3b4ef8",
                                            lineHeight: 1,
                                            padding: "10px 0",
                                            marginRight: "4px",
                                            borderRadius: "5px",
                                            textAlign: "center",
                                            width: "36px",
                                            height: "36px",
                                            transition: "0.3s",
                                            "&:hover": {
                                                background: "#3b4ef8",
                                                color:"#fff"
                                            }
                                        }}>
                                            {val.icon}
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default Futter
