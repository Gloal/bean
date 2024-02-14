import * as React from 'react';
import './Navbar.css'
import logo from './../assets/Images/logo3.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { colors } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
/*import RateReviewIcon from '@mui/icons-material/RateReview'; */



const pages = ['HOME', 'TRENDING', 'ADD REVIEW'];
{/*const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; */}



function NavBar() {
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
    <AppBar position="static">
      {/*<Container maxWidth="xl"> */ }
        <Toolbar className="toolbar" sx={{ bgcolor:'#ffecb3' }}disableGutters>
        <Avatar className="logo" alt="logo" src={logo} />
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */ }
          <Typography className="header"
            variant="h6"
            noWrap
            component=""
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BEAN
          </Typography>
       
          <Button  sx={{color:"inherit" , fontFamily:'cursive'}}>
          <HomeIcon className="navbar-icon"/> 
            <ScrollLink className="navbar-button" to="jumboid" smooth={true} duration={500}>HOME</ScrollLink>
          </Button>
          <Button sx={{color:"inherit" , fontFamily:'cursive'}}>
          <WhatshotIcon className="navbar-icon"/> 
            <ScrollLink className="navbar-button"to="trending" smooth={true} duration={500}>TRENDING</ScrollLink>
          </Button>
          <Button sx={{color:"inherit" , fontFamily:'cursive'}}>
          <FavoriteBorderIcon className="navbar-icon"/> 
            <ScrollLink className="navbar-button" to="listings" smooth={true} duration={500}>FAVOURITES</ScrollLink>
          </Button>
         {/* <Button sx={{color:"inherit" , fontFamily:'cursive'}}>
          <RateReviewIcon className="navbar-icon"/> 
            <ScrollLink className="navbar-button" to="addreview" smooth={true} duration={500}>ADD REVIEW</ScrollLink>
          </Button> */}

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none', bgcolor:'#ffecb3' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          {/*<Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color:'#3e2723' ,
            }}
          >
          </Typography>
          <Box sx={{  flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color:'#3e2723' , display: 'block' , fontWeight: 500 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/*<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> 
              </Box> */}
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;
