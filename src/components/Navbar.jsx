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
            backgroundColor:"#191624",
            color:"#9ca4b0"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List style={{fontFamily: 'Roboto, sans-serif', fontWeight:"500", fontSize:"20px", lineHeight:"40px", marginLeft:"5px"}}>
            <ListItem>
                <p style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                    <i className="fa-solid fa-house"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Home</span> 
                </p>
            </ListItem>
            <ListItem>
                <p style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                    <i className="fa-solid fa-music"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Genere</span> 
                </p>
            </ListItem>
            <ListItem>
                <p style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                    <i className="fa-solid fa-globe"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Top Charts</span> 
                </p>
            </ListItem>
            <ListItem >
                <p style={{width:"100%",dispay:"flex", justifyContent:"center", alignItems:"center"}}>
                    <i className="fa-solid fa-users"></i>  <span style={{fontSize:"13px", marginLeft:"5px"}}>Top Artists</span> 
                </p>
            </ListItem>
        </List>
      </Drawer>
    </>
  );
}
