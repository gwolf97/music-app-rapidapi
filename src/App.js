import React from 'react';
import {Container} from '@mui/material';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {


  return (
    <Router>
      <Container maxWidth="lg">
      <Routes>     
          <Route path="/" element={<HomeScreen/>}/>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
