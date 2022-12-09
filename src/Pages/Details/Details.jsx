import React from "react"
import { Box, Typography, Link } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Carousel from "react-elastic-carousel";
import { Catigori, Catigori2 ,Catimg} from "../../assets/details/details";
import "./style.css"

function Details() {
    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 1, showArrows: false },
        { width: 1024, itemsToShow: 3, showArrows: false },

    ];
    return (
        <>
            <Box sx={{
                marginTop: "0px",
                padding: "10px 0",
                boxShadow: "0px 2px 15px rgb(45 64 95 / 6%)",
                color: "#444444"
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={10.5} md={11} sm={10.8} xs={11} spacing={0}>
                        <div role="presentation" style={{margin: "15px 0"}} >
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    href="#"
                                    sx={{
                                        color:"#3b4ef8"
                                    }}
                                >
                                    Home
                                </Link>
                                <Typography color="text.primary">Portfolio Details</Typography>
                            </Breadcrumbs>
                        </div>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ paddingTop: "40px" }}>
                <Grid container justifyContent="center" textAlign="start" spacing={0}>
                    <Grid item xl={7.5} lg={8} md={8} sm={11.2} xs={11.5}>
                        <Carousel className="lorem" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000} >
                        {Catimg.map((val) => (
                         <Box sx={{paddingTop:(val.pad)}}>
                             <img src={val.card} alt="" width={"100%"}/>
                         </Box>
                         ))}
                        </Carousel>
                    </Grid>
                    <Grid item xl={3.5} lg={3.5} md={3.5} sm={10.8} xs={11} >
                        <Box sx={{
                            padding: "30px",
                            boxShadow: " 0px 0 30px rgb(45 64 95 / 8%)"
                        }}>
                            <Typography variant="h3" sx={{
                                fontSize: "22px",
                                fontWeight: 700,
                                marginBottom: "20px",
                                paddingBottom: "20px",
                                borderBottom: "1px solid #eee",
                            }}>
                                Project information
                            </Typography>
                            {Catigori.map((val) => (
                                <Box >
                                    <Typography sx={{ fontSize: "15px",marginTop:"10px" }}>
                                        <strong style={{ fontWeight: "bold" }}> {val.name}</strong>
                                        {val.text}
                                        <Link>{val.li}</Link>
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                        {Catigori2.map((val) => (
                            <Box sx={{ paddingTop: "30px",marginBottom:"40px" }}>
                                <Typography variant="h2" sx={{
                                    fontSize: "26px",
                                    fontWeight: "700",
                                    marginBottom: "20px",
                                }}>
                                    {val.name}
                                </Typography>
                                <Typography>
                                    {val.text}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Details