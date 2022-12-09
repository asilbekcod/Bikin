import React from "react"
import { Box, Button, Container, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Doctorsmap, Princep, Princep2, Princep3 } from "../../assets/doctors/doctors";
import CustomizedAccordions from "./acardion";
import Fade from 'react-reveal/Fade';

import "./style.css"


function Doctors() {
    return (
        < >
            <Box id="team" sx={{
                padding: "60px 0",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        mb: "15px",
                                        position: "relative",
                                        color: "#2d405f"

                                    }}>
                                        Team
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#aabbd7"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={3}>
                    {Doctorsmap.map((val) => (
                        <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                            <Fade bottom>
                                <Box className="doc" sx={{
                                    marginBottom: "20px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    borderRadius: "4px",
                                    background: "#343a40",
                                }}>
                                            <img max-width={"100%"} height={"auto"} style={{ verticalAlign: "middle" }} src={val.img} alt="" />
                                            <Box className="doctor">
                                                <Box className="doctors">
                                                    <Typography variant="h4" sx={{
                                                        fontWeight: 700,
                                                        marginBottom: "3px",
                                                        fontSize: "18px",
                                                        color: "#fff",
                                                        fontFamily: "'Roboto', sans-serif"
                                                    }}>
                                                        {val.name}
                                                    </Typography>
                                                    <Typography sx={{
                                                        display: "block",
                                                        fontSize: "13px",
                                                        fontWeight: 400,
                                                        color: "#fff",
                                                        fontStyle: "italic"
                                                    }}>
                                                        {val.text}
                                                    </Typography>

                                                </Box>
                                                <Box className="doctors2">
                                                    <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                        <i style={{ fontSize: "21px", margin: "0px 10px" }}>
                                                            {val.icon}
                                                        </i>
                                                    </Link>
                                                    <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                        <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                            {val.icon1}
                                                        </i>
                                                    </Link>
                                                    <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                        <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                            {val.icon2}
                                                        </i>
                                                    </Link>
                                                    <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                        <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                            {val.icon3}
                                                        </i>
                                                    </Link>
                                                </Box>
                                            </Box>
                                </Box>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>

            </Box>

            <Box id="pricing" sx={{
                padding: "60px 0",
                overflow: "hidden",
                backgroundColor: "#f6f8fb"
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.4} lg={10.9} md={11} sm={10.9} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        mb: "15px",
                                        position: "relative",
                                        color: "#2d405f"

                                    }}>
                                        Pricing
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#aabbd7"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xl={3.5} lg={3.7} md={3.7} sm={5.7} xs={11.7}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                borderRadius: "8px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <Typography variant="h3" sx={{
                                    padding: "15px ",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#2d405f7",
                                    width: "100%",
                                    textTransform: "uppercase",

                                }}>
                                    Free
                                </Typography>
                                <Typography variant="h4" sx={{
                                    fontSize: "42px",
                                    color: "#3b4ef8",
                                    fontWeight: 500,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    0
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "20px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    padding: "15px",
                                    textAlign: "center"
                                }}>
                                    <Link href="#" sx={{
                                        background: "#eceefe",
                                        display: "inline-block",
                                        padding: "10px 40px 12px 40px",
                                        borderRadius: "5px",
                                        color: "#3b4ef8",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        marginBottom: "20px",
                                        "&:hover": {
                                            background: "#3b4ef8",
                                            color: "fff"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={3.5} lg={3.7} md={3.7} sm={5.7} xs={11.7}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                borderRadius: "8px",
                                position: "relative",
                                overflow: "hidden",
                                backgroundColor: "#466393",
                                width: "100%"
                            }}>
                                <Typography variant="h3" sx={{
                                    padding: "15px ",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#fff",
                                    width: "100%",
                                    textTransform: "uppercase",

                                }}>
                                    Business
                                </Typography>
                                <Typography variant="h4" sx={{
                                    fontSize: "42px",
                                    color: "#fff",
                                    fontWeight: 500,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    19
                                    <span style={{ fontSize: "16px", color: "#fff", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep2.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: "#fff",
                                        paddingBottom: "20px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    padding: "15px",
                                    textAlign: "center"
                                }}>
                                    <Link href="#" sx={{
                                        background: "rgba(255, 255, 255, 0.1)",
                                        display: "inline-block",
                                        padding: "10px 40px 12px 40px",
                                        borderRadius: "5px",
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        marginBottom: "20px",
                                        "&:hover": {
                                            background: "#fff",
                                            color: "#4e6fa4"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={3.5} lg={3.7} md={3.7} sm={5.7} xs={11.7}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                borderRadius: "8px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <Typography variant="h3" sx={{
                                    padding: "15px ",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#2d405f7",
                                    width: "100%",
                                    textTransform: "uppercase",


                                }}>
                                    Developer
                                </Typography>
                                <Typography variant="h4" sx={{
                                    fontSize: "42px",
                                    color: "#3b4ef8",
                                    fontWeight: 500,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    29
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep3.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "20px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    padding: "15px",
                                    textAlign: "center"
                                }}>
                                    <Link href="#" sx={{
                                        background: "#eceefe",
                                        display: "inline-block",
                                        padding: "10px 40px 12px 40px",
                                        borderRadius: "5px",
                                        color: "#3b4ef8",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        marginBottom: "20px",
                                        "&:hover": {
                                            background: "#3b4ef8",
                                            color: "fff"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={0} lg={0} md={0} sm={5.7} xs={0} sx={{width:{xl:"0%",lg:"0%",md:"0%",sm:"100%",xs:"0%"}}}>
                        </Grid>

                </Grid>
            </Box>
            <Box id="faq" sx={{
                padding: "60px 0",
                overflow: "hidden",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        mb: "15px",
                                        position: "relative",
                                        color: "#2d405f"

                                    }}>
                                        Frequently Asked Questioins
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#aabbd7"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container justifyContent="center" textAlign="start">
                        <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                            <Fade bottom>
                                <CustomizedAccordions />
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default Doctors
