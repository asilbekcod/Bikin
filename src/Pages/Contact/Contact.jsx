import React from "react"
import { Box, Button, Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import { ContactIcon, Coninput } from "../../assets/contact/contact";
import "./style.css"

function Contact() {
    return (
        <>
            <Box id="contact" sx={{
                padding: "60px 0",
                overflow: "hidden",
                background:"#f6f8fb"
            }}>
                <Grid container justifyContent="center" textAlign="start">
                <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                <Box sx={{ paddingBottom: "30px"}}>
                        <Box sx={{ justifyContent: "center", display: "flex", }}>
                            <Typography sx={{
                                fontSize: "32px ",
                                fontWeight: "bold",
                                mb: "15px",
                                position: "relative",
                                color:"#2d405f"
                                
                            }}>
                                Contact
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
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" textAlign="start" spacing={0} sx={{gap:{xl:'15px',lg:'15px',md:'15px'}}}>
                    <Grid item xl={5.2} lg={5.4} md={5.6} sm={11} xs={12}>
                        <Grid container justifyContent="center" textAlign="start" spacing={3}>
                            {ContactIcon.map((val) => (
                                <Grid item xl={val.gr} lg={val.gr} md={val.gr} sm={val.gr} xs={12} >
                                    <Box sx={{
                                        color: "#2d405f",
                                        textAlign: "center",
                                        boxShadow: "0 0 30px rgb(214 215 216 / 60%)",
                                        padding: "20px 0 30px 0",
                                        background:"#fff"
                                    }}>
                                        <i style={{
                                            fontSize: "32px",
                                            color: "#3b4ef8",
                                            borderRadius: "50%",
                                            padding: "9px",
                                            lineHeight: "1",
                                            display: "inline-block"
                                        }}>
                                            {val.icon}
                                        </i>
                                        <Typography variant="h3" sx={{
                                            fontSize: "20px",
                                            color: "#2d405f",
                                            fontWeight: 700,
                                            margin: "10px 0",
                                        }}>
                                            {val.name}
                                        </Typography>
                                        <Typography sx={{
                                            padding: 0,
                                            lineHeight: "24px",
                                            fontSize: "14px",
                                            marginBottom: 0
                                        }}>
                                            {val.text} <br />
                                            {val.text2}
                                        </Typography>

                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xl={5.2} lg={5.4} md={5.6} sm={10.7} xs={11.3} spacing={0}>
                        <Box sx={{
                            boxShadow: "0 0 30px rgb(214 215 216 / 60%)",
                            padding: "30px 30px 30px 20px",
                            background:"#fff"
                        }}>
                            <Grid container justifyContent="center"  spacing={3} >
                                {Coninput.map((val) => (
                                    <Grid item xl={val.gr} lg={val.gr} md={val.gr} sm={val.gr} xs={12} >
                                        <input type="text" name="name" className="input" placeholder={val.name} style={{
                                            padding: "10px 15px",
                                            fontSize: "14px",
                                            borderRadius: "4px",
                                            width: "100%",
                                            border: "1px solid #ced4da",
                                            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out"
                                        }} />
                                    </Grid>
                                ))}
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                    <textarea class="form-control" name="message" className="input" rows="7" placeholder="Message" style={{
                                        padding: "12px 15px",
                                        fontSize: "14px",
                                        borderRadius: "4px",
                                        width: "100%",
                                        border: "1px solid #ced4da",
                                        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                                        marginBottom:"10px"

                                    }} />
                                </Grid>
                            </Grid>
                            <Box sx={{ textAlign: "center" }}>
                                <Button sx={{
                                    background: "#3b4ef8",
                                    border: 0,
                                    padding: "10px 30px",
                                    color: "#fff",
                                    transition: "0.4s",
                                    borderRadius: "4px",
                                    cursor:"pointer",
                                    "&:hover":{
                                        background:"#0a22f6"
                                    }
                                }}>
                                    Send Message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}
export default Contact
