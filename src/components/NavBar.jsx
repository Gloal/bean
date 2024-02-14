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



const pages = ['HOME', 'TRENDING', 'ADD REVIEW'];



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
        <Toolbar className="toolbar" sx={{ bgcolor:'#ffecb3' }}disableGutters>
        <Avatar className="logo" alt="logo" src={logo} />
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
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;
