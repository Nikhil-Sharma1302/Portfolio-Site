import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header className="sticky top-0 z-50">
      <AppBar
        position="static"
        elevation={4}
        sx={{ bgcolor: '#0f172a' }} // Tailwind dark blue
      >
        <Toolbar className="flex justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" className="font-bold text-accent">
              Nikhil Sharma
            </Typography>
          </motion.div>

          {isMobile ? (
            <>
              <IconButton edge="end" onClick={toggleDrawer} sx={{ color: '#ffffff' }}>
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: { bgcolor: '#0f172a', color: 'white', width: 250 }
                }}
              >
                <Box p={2}>
                  <div className="flex justify-between items-center mb-4">
                    <Typography variant="h6" className="text-accent">
                      Menu
                    </Typography>
                    <IconButton onClick={toggleDrawer} sx={{ color: '#ffffff' }}>
                      <CloseIcon />
                    </IconButton>
                  </div>

                  <List>
                    {navLinks.map((item) => (
                      <ListItem key={item.href} disablePadding>
                        <ListItemButton
                          component="a"
                          href={item.href}
                          onClick={toggleDrawer}
                          sx={{
                            '&:hover .MuiListItemText-root': { color: '#06b6d4' }, // cyan-500
                          }}
                        >
                          <ListItemText primary={item.label} sx={{ color: 'white' }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <nav className="space-x-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-accent transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Navbar;
