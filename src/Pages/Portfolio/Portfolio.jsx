import React from "react"
import { Box, Button, Typography, Link, Grid } from '@mui/material'
import './Portfolio.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Carousel from "react-elastic-carousel";
import { ProCarousel } from "../../assets/ProCarousel/ProCarousel";
import { Portfolio2 } from "../../assets/Portfolio2/Portfolio2";
import ProImg1 from '../../assets/img/portfolio/portfolio-1.jpg'
import ProImg2 from '../../assets/img/portfolio/portfolio-2.jpg'
import ProImg3 from '../../assets/img/portfolio/portfolio-3.jpg'
import ProImg4 from '../../assets/img/portfolio/portfolio-4.jpg'
import ProImg5 from '../../assets/img/portfolio/portfolio-5.jpg'
import ProImg6 from '../../assets/img/portfolio/portfolio-6.jpg'
import ProImg7 from '../../assets/img/portfolio/portfolio-7.jpg'
import ProImg8 from '../../assets/img/portfolio/portfolio-8.jpg'
import ProImg9 from '../../assets/img/portfolio/portfolio-9.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import Slide from 'react-reveal/Slide';
import { useNavigate } from "react-router-dom";

function Portfolio() {
    const navigate = useNavigate()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dadadfa = () => {
        navigate('/details')
    };

    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 1, showArrows: false },
        { width: 1024, itemsToShow: 3, showArrows: false },

    ];

    return (
        <>
            <Box sx={{
                padding: { xl: "60px 110px", lg: "60px 80px", md: "60px 45px", sm: "60px 35px", xs: "60px 10px" },
            }} id='portfolio'>
                <Box>
                    <Box sx={{
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <Typography sx={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#2d405f',
                            marginBottom: '18px',
                            textAlign: 'center'
                        }}>
                            Portfolio
                        </Typography>
                        <Box sx={{
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            <Typography sx={{
                                height: '3px',
                                width: '50px',
                                background: '#aabbd7',
                                marginBottom: '20px',
                            }}>

                            </Typography>
                        </Box>
                        <Typography sx={{
                            color: '#444444',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box id="ProjectZZZ">
                    <Box sx={{ width: '100%', typography: 'body1', paddingBottom: '60px' }}>
                        <TabContext value={value}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="ALL" value="1" sx={{
                                        minWidth: "55px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#3b4ef8 !important'
                                        }
                                    }} />
                                    <Tab label="APP" value="2" sx={{
                                        minWidth: "57px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#3b4ef8 !important'
                                        }
                                    }} />
                                    <Tab label="CARD" value="3" sx={{
                                        minWidth: "68px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#3b4ef8 !important'
                                        }
                                    }} />
                                    <Tab label="WEB" value="4" sx={{
                                        minWidth: "61px",
                                        minHeight: "32px",
                                        margin: "5px",
                                        padding: "0px",
                                        background: "#fff",
                                        color: "#444",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderRadius: '3px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#3b4ef8 !important'
                                        }
                                    }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Box>
                                    <Box sx={{
                                        padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                    }}>
                                        <Box>
                                            <Box sx={{
                                                display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none', }
                                            }}>
                                                <Box sx={{
                                                    width: '100%',
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 1
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link onClick={dadadfa} sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg1} className="img-hover-zoom" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic',
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor:'pointer',
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor:'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box className="img-hover-zoom">
                                                            <img src={ProImg6} alt="This zooms-in really well and smooth" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    margin: '0px 24px',
                                                    width: '100%'
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg2} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg5} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Web 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Web
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg9} alt="" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    width: '100%'
                                                }}>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    App 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    App
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg3} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 2
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg4} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 1
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg7} alt="" />
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        position: 'relative',
                                                        transition: 'transform .5s ease',
                                                        marginTop: '30px'
                                                    }}>
                                                        <Box sx={{
                                                            position: 'absolute',
                                                            padding: '20px',
                                                            width: '100%',
                                                            height: '100%',
                                                            alignItems: 'end',
                                                            display: 'flex',
                                                            background: 'rgba(45, 64, 95, 0.6)',
                                                            opacity: '0',
                                                            transition: '.5s',
                                                            "&:hover": {
                                                                opacity: '1'
                                                            }
                                                        }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    fontWeight: '600',
                                                                    fontFamily: '"Krub", sans-serif',
                                                                    marginBottom: '8px'
                                                                }}>
                                                                    Card 3
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                                    fontSize: '14px',
                                                                    textTransform: 'uppercase',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    Card
                                                                </Typography>
                                                                <Box>
                                                                    <Link href="#" sx={{
                                                                        fontSize: '22px',
                                                                        color: '#fff',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <AiOutlinePlus />
                                                                    </Link>
                                                                    <Link href="details" sx={{
                                                                        fontSize: '20px',
                                                                        color: '#fff',
                                                                        marginLeft: '5px',
                                                                        cursor: 'pointer'
                                                                    }}>
                                                                        <FiLink />
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <img src={ProImg8} alt="" />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>

                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'none', }
                                        }}>
                                            <Box sx={{
                                                width: '100%',
                                                marginRight: '12px'
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg1} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg4} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg6} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg8} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{
                                                width: '100%',
                                                marginLeft: '12px'
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg2} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg9} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: 'flex', }
                                        }}>
                                            <Box sx={{
                                                width: '100%',
                                            }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg1} alt="" />
                                                    </Box>

                                                </Box>                                                    <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg2} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg4} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg6} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 1
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg8} alt="" />
                                                    </Box>
                                                </Box>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease',
                                                    marginTop: '30px'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg9} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value="2">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: '100%',
                                                    height: '100%',
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            App 1
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            App
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg1} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg3} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        {/* <Grid item xs={0} sm={6} md={0} lg={0} xl={0}>
                                        </Grid> */}
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                App 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                App
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        marginLeft: { xl: '0%', lg: '0%', md: '0%', sm: '52%', xs: '0%' },
                                                        width: { xl: '100%', lg: '100%', md: '100%', sm: '48%', xs: '100%' },
                                                        marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '-150px', xs: '0%' }
                                                    }}>
                                                        <img src={ProImg6} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="3">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: '100%',
                                                    height: '100%',
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Card 1
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            Card
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg4} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg7} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Card 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Card
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        marginLeft: { xl: '0%', lg: '0%', md: '0%', sm: '52%', xs: '0%' },
                                                        width: { xl: '100%', lg: '100%', md: '100%', sm: '48%', xs: '100%' },
                                                    }}>
                                                        <img src={ProImg8} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="4">
                                <Box sx={{
                                    padding: { xl: "10px 100px !important", lg: "10px 70px !important", md: "10px 35px !important", sm: "10px 25px !important", xs: "10px 10px " },
                                }}>
                                    <Grid container spacing={{ xs: 0, sm: 3, md: 3, lg: 3, xl: 3 }} >
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{
                                                position: 'relative',
                                                transition: 'transform .5s ease'
                                            }}>
                                                <Box sx={{
                                                    position: 'absolute',
                                                    padding: '20px',
                                                    width: '100%',
                                                    height: '100%',
                                                    alignItems: 'end',
                                                    display: 'flex',
                                                    background: 'rgba(45, 64, 95, 0.6)',
                                                    opacity: '0',
                                                    transition: '.5s',
                                                    "&:hover": {
                                                        opacity: '1'
                                                    }
                                                }}>
                                                    <Box>
                                                        <Typography sx={{
                                                            fontSize: '20px',
                                                            color: '#fff',
                                                            fontWeight: '600',
                                                            fontFamily: '"Krub", sans-serif',
                                                            marginBottom: '8px'
                                                        }}>
                                                            Web 3
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'rgba(255, 255, 255, 0.7)',
                                                            fontSize: '14px',
                                                            textTransform: 'uppercase',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            Web
                                                        </Typography>
                                                        <Box>
                                                            <Link href="#" sx={{
                                                                fontSize: '22px',
                                                                color: '#fff',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <AiOutlinePlus />
                                                            </Link>
                                                            <Link href="details" sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                marginLeft: '5px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <FiLink />
                                                            </Link>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <img src={ProImg2} alt="" width={'100%'} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 2
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <img src={ProImg5} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                            <Box sx={{ marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '30px' } }}>
                                                <Box sx={{
                                                    position: 'relative',
                                                    transition: 'transform .5s ease'
                                                }}>
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: '100%',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        background: 'rgba(45, 64, 95, 0.6)',
                                                        opacity: '0',
                                                        transition: '.5s',
                                                        "&:hover": {
                                                            opacity: '1'
                                                        }
                                                    }}>
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '20px',
                                                                color: '#fff',
                                                                fontWeight: '600',
                                                                fontFamily: '"Krub", sans-serif',
                                                                marginBottom: '8px'
                                                            }}>
                                                                Web 3
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: 'rgba(255, 255, 255, 0.7)',
                                                                fontSize: '14px',
                                                                textTransform: 'uppercase',
                                                                fontStyle: 'italic'
                                                            }}>
                                                                Web
                                                            </Typography>
                                                            <Box>
                                                                <Link href="#" sx={{
                                                                    fontSize: '22px',
                                                                    color: '#fff',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <AiOutlinePlus />
                                                                </Link>
                                                                <Link href="details" sx={{
                                                                    fontSize: '20px',
                                                                    color: '#fff',
                                                                    marginLeft: '5px',
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    <FiLink />
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{
                                                        width: '100%',
                                                        marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '-240px', xs: '0%' }
                                                    }}>
                                                        <img src={ProImg9} alt="" width={'100%'} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                padding: { xl: "60px 110px", lg: "60px 80px", md: "60px 45px", sm: "60px 35px", xs: "60px 10px" },
                background: '#f6f8fb'
            }}>
                <Box>
                    <Box sx={{
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <Typography sx={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#2d405f',
                            marginBottom: '18px',
                            textAlign: 'center'
                        }}>
                            Testimonials
                        </Typography>
                        <Box sx={{
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            <Typography sx={{
                                height: '3px',
                                width: '50px',
                                background: '#aabbd7',
                                marginBottom: '20px',
                            }}>

                            </Typography>
                        </Box>
                        <Typography sx={{
                            color: '#444444',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Slide bottom>
                        <Carousel className="lorem" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={6000} >
                            {ProCarousel.map((val) => (
                                <Box sx={{
                                    width: "100%",
                                    height: "auto ",
                                    padding: '30px 38px 0 32px',
                                    margin: '30px 15px',
                                    textAlign: 'center',
                                    minHeight: '380px',
                                    boxShadow: '0px 2px 12px rgb(0 0 0 / 8%)',
                                    background: '#fff'
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontStyle: 'italic',
                                            margin: '0 auto 15px auto',
                                            fontSize: '15.7px',
                                            color: '#555',
                                            fontFamily: '"Open Sans", sans-serif',
                                            fontWeight: '500',
                                            padding: { xl: '0px', lg: '0px', md: '10px 13px', sm: '10px', xs: '0px' }
                                        }}>
                                            {val.ProCarYoz1}
                                        </Typography>
                                        <Box>
                                            <img src={val.ProCarImg} alt="" width={'90px'} style={{
                                                borderRadius: '50%',
                                                border: '4px solid #fff'
                                            }} />
                                        </Box>
                                        <Typography sx={{
                                            fontSize: '18px',
                                            color: '#111',
                                            margin: '10px 0 5px 0',
                                            fontWeight: 'bold',
                                            fontFamily: '"Krub", sans-serif'
                                        }}>
                                            {val.ProCarYoz2}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: '14px',
                                            color: '#999',
                                            fontFamily: '"Krub", sans-serif'
                                        }}>
                                            {val.ProCarYoz3}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Carousel>
                    </Slide>
                </Box>
            </Box>
        </>
    )
}
export default Portfolio