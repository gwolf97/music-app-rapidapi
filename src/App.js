import React from 'react';
import {} from '@mui/material';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import { useDispatch } from 'react-redux';
import { getTopCharts } from './actions/actions';

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTopCharts())
  }, [])

  return (
    <Router>
      <Routes>     
          <Route path="/" element={<HomeScreen discover={true} />}/>
          <Route path="/topcharts/:topcharts" element={<HomeScreen discover={false} />}/>
          <Route path="/topartists/:artists" element={<HomeScreen discover={false} />}/>
      </Routes>
    </Router>
  );
}

export default App;
