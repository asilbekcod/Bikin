import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Navbar } from '../../assets/Navbar/Navbar';
import Link from '@mui/material/Link';
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { BorderBottom } from '@mui/icons-material';
import "./style.css"


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{
        boxShadow: 'none !important',
        borderBottom: '2px solid #eceefe !important'
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            padding: { xl: "20px 110px", lg: "20px 80px", md: "0px 45px", sm: "15px 35px", xs: "15px 10px" },
            height: { xl: '73px', lg: '73px', md: '73px', sm: '62px', xs: '62px' },
            background: '#f6f7ff'
          }}>
            <Typography sx={{
              color: '#2d405f',
              fontSize: '30px',
              fontWeight: '600',
              letterSpacing: '1',
              cursor:'pointer'
            }}>
              Bikin
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'right',
              padding: '0px',
              alignItems: 'center'
            }}>
              {Navbar.map((val) => (
                <Box>
                  {
                    val.ok ?
                      <DropdownButton id="dropdown-basic-button" title="Drop Down">
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                        <Dropdown as={ButtonGroup}>
                          <Dropdown.Item className='hovIch2'>Deep Drop Down</Dropdown.Item>
                          <Dropdown.Toggle split id="dropdown-split-basic" />
                          <Dropdown.Menu>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 5</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                      </DropdownButton>
                      :
                      <Link className='hovnav' href={val.hr}
                        key={val}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          display: 'block',
                          fontSize: '14px',
                          padding: '10px 0 10px 30px',
                          color: '#2d405f',
                          textDecoration: 'none',
                          fontWeight: '550',
                          fontFamily: '"Krub", sans-serif'
                        }}
                      >
                        {val.NavYoz1}
                      </Link>
                  }
                </Box>
              ))}
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: '100%' },
              justifyContent: 'right'
            }}>
              <Box sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                justifyContent: 'right',
              }}>
                <Button href='#about' sx={{
                  background: '#e2e5fe',
                  display: { xs: 'none', sm: 'none', md: 'flex' },
                  height: '39px',
                  padding: '9px 25px',
                  textTransform: 'none',
                  fontSize: '14px',
                  color: '#3b4ef8',
                  marginLeft: '30px',
                  borderRadius: '5px',
                  '&:hover': {
                    background: '#3b4ef8',
                    color: '#fff',
                  }
                }}>
                  Get Started
                </Button>
              </Box>
              <Box sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'right',
              }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                >
                  <MenuIcon style={{color:"#2d405f",fontSize:'28px'}} />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Box sx={{
                      background: 'rgba(60, 60, 60, 0.9)',
                      width: '100%',
                      minHeight: '100vh !important',
                      padding: '55px 15px 15px 15px'
                    }}>
                      <Box sx={{
                        width: 'calc(100%-30px)',
                        background: '#fff',
                        minHeight: '89vh !important',
                        borderRadius: '8px',
                        padding: '10px 0px',
                        overflow: 'scroll',
                      }}>
                        <Link onClick={handleCloseNavMenu}>
                          <Box sx={{
                            position: 'absolute',
                            color: '#fff',
                            justifyContent: 'right',
                            display: 'flex',
                            marginTop: '-45px',
                            fontSize: '25px',
                            marginLeft: { sm: '93%', xs: '87%' }
                          }}>
                            <AiOutlineClose />
                          </Box>
                        </Link>
                        {Navbar.map((val) => (
                          <Box id='zzidzz'>
                            {val.ok ?
                              <Box>
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography sx={{
                                      width: '100%',
                                      display: 'block',
                                      fontSize: '14px',
                                      color: '#2d405f',
                                      textDecoration: 'none',
                                      fontWeight: '550',
                                      fontFamily: '"Krub", sans-serif',
                                      paddingLeft: '30px'
                                    }}>Drop Down</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                                    <Box id='it'>
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                          <Typography href="#" className='hovIch'>Deep Drop Down</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                          <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                                        </AccordionDetails>
                                      </Accordion>
                                    </Box>
                                    <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                                    <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                                    <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </Box>
                              :
                              <Link className='hovnav' href={val.hr}
                                key={val}
                                onClick={handleCloseNavMenu}
                                sx={{
                                  my: 2,
                                  display: 'block',
                                  fontSize: '14px',
                                  padding: '10px 0 10px 30px',
                                  color: '#2d405f',
                                  textDecoration: 'none',
                                  fontWeight: '550',
                                  fontFamily: '"Krub", sans-serif'
                                }}
                              >
                                {val.NavYoz1}
                              </Link>
                            }
                          </Box>
                        ))}
                        <Box sx={{
                          maxWidth: '100%',
                          margin:'15px 0'
                        }}>
                          <Button href='about' sx={{
                            background: '#e2e5fe',
                            height: '39px',
                            padding: '9px 25px',
                            textTransform: 'none',
                            fontSize: '14px',
                            color: '#3b4ef8',
                            marginLeft: '30px',
                            width: {sm:'92%',xs:'86%'},
                            borderRadius: '5px',
                           justifyContent:'start',
                           display:'flex',
                           fontWeight: '550',
                            '&:hover': {
                              background: '#3b4ef8',
                              color: '#fff',
                            }
                          }}>
                            Get Started
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
