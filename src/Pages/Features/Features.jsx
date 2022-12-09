import React from "react"
import { Box, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Featur1, Featur2, Featur3, Featur4, Featurchek,Featur5 } from "../../assets/feature/feature";
import Feat from '../../Pages/feat/index'
function Features() {
    return (
        <>
            <Box id="features" sx={{
                padding: " 80px 12px",
                overflow: "hidden",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={11} md={11} sm={10.8} xs={11} spacing={0}>
                        <Box sx={{ paddingBottom: "30px" }}>
                            <Box sx={{ justifyContent: "center", display: "flex", }}>
                                <Typography sx={{
                                    fontSize: "32px ",
                                    fontWeight: "bold",
                                    mb: "15px",
                                    position: "relative",
                                    color: "#2d405f"

                                }}>
                                    Features
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
                {Featur1.map((val) => (
                    <Grid container justifyContent="center" spacing={3} sx={{ marginBottom: "110px" }}>
                        <Grid item xl={4} lg={4.4} md={4.4} sm={4.6} xs={12}>
                            <Box>
                                <img src={val.img} alt="" max-width={"100%"} />
                            </Box>
                        </Grid>
                        <Grid item xl={6.6} lg={6.6} md={6.6} sm={6.6} xs={12}>
                            <Box sx={{ paddingTop: "10px" }}>
                                <Typography variant="h3" sx={{
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    color: "#444444",
                                    marginBottom: "10px"
                                }}>
                                    {val.name}
                                </Typography>
                                <Typography sx={{ fontStyle: "italic", color: "#4B4B4B", marginBottom: "10px" }}>
                                    {val.lorem}
                                </Typography>
                                {Featur2.map((val) => (
                                    <Box sx={{ padding: 0, color: "#4B4B4B", paddingBottom: "15px", fontSize: "18px", paddingLeft: "10px" }}>
                                        <i style={{
                                            fontSize: "10px",
                                            paddingRight: "15px",
                                            color: "#3b4ef8",
                                        }}>{val.icon}</i>
                                        {val.text}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                    </Grid>
                ))}
                {Featur3.map((val) => (
                    <Grid container justifyContent="center" spacing={3} sx={{ marginBottom: "110px" }}>
                        <Grid item xl={6.6} lg={6.6} md={6.6} sm={6.6} xs={12}>
                            <Box sx={{ paddingTop: "30px" }}>
                                <Typography variant="h3" sx={{
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    color: "#444444",
                                    marginBottom: "10px"
                                }}>
                                    {val.name}
                                </Typography>
                                <Typography sx={{ fontStyle: "italic", color: "#4B4B4B", marginBottom: "10px" }}>
                                    {val.lorem}
                                </Typography>
                                <Typography>
                                    {val.text}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4.4} md={4.4} sm={4.6} xs={12}>
                            <Box>
                                <img src={val.img} alt="" max-width={"100%"} />
                            </Box>
                        </Grid>

                    </Grid>
                ))}
                {Featur4.map((val) => (
                    <Grid container justifyContent="center" spacing={3} sx={{ marginBottom: "110px" }}>
                        <Grid item xl={4} lg={4.4} md={4.4} sm={4.6} xs={12}>
                            <Box>
                                <img src={val.img} alt="" max-width={"100%"} />
                            </Box>
                        </Grid>
                        <Grid item xl={6.6} lg={6.6} md={6.6} sm={6.6} xs={12}>
                            <Box sx={{ paddingTop: "10px" }}>
                                <Typography variant="h3" sx={{
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    color: "#444444",
                                    marginBottom: "10px"
                                }}>
                                    {val.name}
                                </Typography>
                                <Typography sx={{ fontStyle: "italic", color: "#4B4B4B", marginBottom: "10px" }}>
                                    {val.lorem}
                                </Typography>
                                {Featurchek.map((val) => (
                                    <Box sx={{ padding: 0, color: "#4B4B4B", paddingBottom: "15px", fontSize: "18px", paddingLeft: "10px" }}>
                                        <i style={{
                                            fontSize: "10px",
                                            paddingRight: "15px",
                                            color: "#3b4ef8",
                                        }}>{val.icon}</i>
                                        {val.text}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                    </Grid>
                ))}
                 {Featur5.map((val) => (
                    <Grid container justifyContent="center" spacing={3} sx={{ marginBottom: "110px" }}>
                        <Grid item xl={6.6} lg={6.6} md={6.6} sm={6.6} xs={12}>
                            <Box sx={{ paddingTop: "30px" }}>
                                <Typography variant="h3" sx={{
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    color: "#444444",
                                    marginBottom: "10px"
                                }}>
                                    {val.name}
                                </Typography>
                                <Typography sx={{ fontStyle: "italic", color: "#4B4B4B", marginBottom: "10px" }}>
                                    {val.lorem}
                                </Typography>
                                <Typography>
                                    {val.text}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4.4} md={4.4} sm={4.6} xs={12}>
                            <Box>
                                <img src={val.img} alt="" max-width={"100%"} />
                            </Box>
                        </Grid>

                    </Grid>
                ))}
                <Feat/>
            </Box>
        </>
    )
}
export default Features
