import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './StyleSheets/Header.css'

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

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
              <a href='#home' className='my__link__mob' >
                <MenuItem  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    Home
                  </Typography>
                </MenuItem>
                </a>

                <a href='#about' className='my__link__mob'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    About
                  </Typography>
                </MenuItem>
                </a>

                <a href='#resume' className='my__link__mob'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    Resume
                  </Typography>
                </MenuItem>
                </a>

                <a href='#testimonals' className='my__link__mob'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    Testimonals
                  </Typography>
                </MenuItem>
                </a>

                <a href='#work' className='my__link__mob'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    Work
                  </Typography>
                </MenuItem>
                </a>
                    
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <a href='#home' className='my__link'>
              <Button onClick={handleCloseNavMenu}
              sx={{ color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </a>

            <a href='#about' className='my__link'>
              <Button onClick={handleCloseNavMenu}
              sx={{color: 'white', display: 'block' }}
              >
                About
              </Button>
            </a>

            <a href='#resume' className='my__link'>
              <Button onClick={handleCloseNavMenu}
              sx={{  color: 'white', display: 'block' }}
              >
                Resume
              </Button>
            </a>

            <a href='#testimonals' className='my__link'>    
              <Button onClick={handleCloseNavMenu}
              sx={{   color: 'white', display: 'block' }}
              >
                Testimonals
              </Button>
            </a>

            <a href='#work' className='my__link'>
              <Button onClick={handleCloseNavMenu}
              sx={{  color: 'white', display: 'block' }}
              >
                Work
              </Button>
            </a>
                    
                    
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography>
              FRONTEND DEVELOPER
            </Typography>
          </Box>
        </Toolbar>
      </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
