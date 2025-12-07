'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'ASCore', href: '/ascore' },
  { name: 'MAASU', href: '/maasu' },
  { name: 'Agency', href: '/agency' },
  { name: 'Alumni', href: '/alumni' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }} suppressHydrationWarning>
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              flexGrow: 1,
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.2s'
              }
            }}
          >
            <Box sx={{ position: 'relative', width: 48, height: 48 }}>
              <Image
                src="/asc_logo_white_border.png"
                alt="ASC Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Asian Student Conference
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Box
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    position: 'relative',
                    color: isActive ? 'primary.main' : 'text.primary',
                    textDecoration: 'none',
                    fontWeight: 500,
                    pb: 0.5,
                    '&:hover': {
                      color: 'primary.main'
                    },
                    '&::after': isActive ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      bgcolor: 'primary.main'
                    } : {}
                  }}
                >
                  {item.name}
                </Box>
              );
            })}
            <Button
              component={Link}
              href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
            >
              Join Us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 280, pt: 8 }
        }}
      >
        <List>
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    borderLeft: isActive ? '4px solid' : 'none',
                    borderColor: 'primary.main',
                    pl: isActive ? 3 : 2,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem sx={{ pt: 2 }}>
            <Button
              component={Link}
              href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              size="large"
            >
              Join Us
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}
