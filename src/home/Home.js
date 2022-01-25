import React, { useEffect, useRef } from "react"


import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';


import '../index.css';
//<img className="serveback" src='https://alf0ns0-l0pez.github.io/portfolio/img/serveback.png' alt="slide" />
const pages = ['Projects', 'About', 'Blog'];
export const Home = props => {
    const slideshow = useRef(null);
    const next_slide = () => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {

            // Obtenemos el primer elemento del slideshow.
            const firstElement = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `10000ms ease-out all`;

            const lenSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${lenSlide}px)`;

            const transition_slide = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(firstElement);

                slideshow.current.removeEventListener('transitionend', transition_slide);
            }

            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transition_slide);
        }
    };
    useEffect(() => {
        setInterval(() => {
            next_slide();
        }, 10000);
    }, []);
    const menuTheme = createTheme({
        palette: {
            primary: {
                main: '#0a192f',
                contrastText: '#fff',
            },
        },
    });
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <ThemeProvider theme={menuTheme}>
                <AppBar position="static" color="primary">
                    <Container maxWidth="l">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                <img src='https://alf0ns0-l0pez.github.io/portfolio/img/al_logo.png' className='logo_menu' alt="..." />
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                <img src='https://alf0ns0-l0pez.github.io/portfolio/img/al_logo.png' className='logo_menu' alt="..." />
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Alfonso Lopez">
                                    <IconButton>
                                        <Avatar alt="Remy Sharp" src="https://alf0ns0-l0pez.github.io/portfolio/img/mastergreen.png" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
            <div className='slider_complete' >
                <div className='slider_galery' ref={slideshow}>
                    <div className='slide_single'>
                        <img src='https://alf0ns0-l0pez.github.io/portfolio/img/pcbback1.png' className='img_slide' alt="..." />
                    </div>
                    <div className='slide_single'>
                        <img src='https://alf0ns0-l0pez.github.io/portfolio/img/pcbback2.png' className='img_slide' alt="..." />
                    </div>
                    <div className='slide_single'>
                        <img src='https://alf0ns0-l0pez.github.io/portfolio/img/pcbback3.png' className='img_slide' alt="..." />
                    </div>
                    <div className='slide_single'>
                        <img src='https://alf0ns0-l0pez.github.io/portfolio/img/pcbback4.png' className='img_slide' alt="..." />
                    </div>
                </div>
                <div className='over_slider'>
                    <img className='profileimage' src='https://alf0ns0-l0pez.github.io/portfolio/img/profile_image.png' alt="..." />
                </div>
            </div>
            <div className="presentation">
                <Card elevation={6}  sx={{ maxWidth: 800 }}>
                    <CardContent>
                        <Typography variant="h3" component="div">
                            Hello I'm Alfonso Lopez
                        </Typography>
                        <Typography sx={{ fontSize: 26, mb: 1.5 }} color="text.secondary">
                            Software Developer
                        </Typography>
                        <Typography variant="body1">
                            I'm Engineer with a can-do attitude, an enthusiastic
                            team player and deep creative thinker, proficient with the
                            systems programming and user experience design.
                            Considering myself a person with ease of theoretical and
                            practical learning. In the last years I have been dedicated to
                            the development of application projects for manufacturing
                            industry.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="logo_group">
                <Box className="title_xxl">
                    <Typography variant="h1" component="div" gutterBottom>
                        PLATFORMS
                    </Typography>
                </Box>
                <Box
                    className="row_img"
                    sx={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        '& > :not(style)': {
                            m: 2,
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0,0,0,0)',
                        },
                    }}
                >
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/6/66/Openlogo-debianV2.svg' alt="slide" /></Paper>
                </Box>
                <Box
                    className="row_img"
                    sx={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        '& > :not(style)': {
                            m: 2,
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0,0,0,0)',
                        },
                    }}
                >
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/480px-Python-logo-notext.svg.png' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg' alt="slide" /></Paper>
                </Box>
                <Box
                    className="row_img"
                    sx={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        '& > :not(style)': {
                            m: 2,
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0,0,0,0)',
                        },
                    }}
                >
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/512px-Antu_mysql-workbench.svg.png' alt="slide" /></Paper>
                </Box>
                <Box
                    className="row_img"
                    sx={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        '& > :not(style)': {
                            m: 2,
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0,0,0,0)',
                        },
                    }}
                >
                    <Paper elevation={0}><img className='language_img' src='https://www.pngkey.com/png/full/85-858820_eagle-pcb-logo-png.png' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://blogs.solidworks.com/solidworkslatamyesp/wp-content/uploads/sites/15/2018/03/sw-150x150.png' alt="slide" /></Paper>
                    <Paper elevation={0}><img className='language_img' src='https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/vertical-logo-monochromatic.png?itok=erja9lKc' alt="slide" /></Paper>
                </Box>
            </div>

        </div>
    );
};
