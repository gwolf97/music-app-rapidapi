import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItem, List } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "240px",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
            <ListItem>
                home
            </ListItem>
        </List>
      </Drawer>
    </>
  );
}
