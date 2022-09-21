import React from 'react';
import {} from '@mui/material';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainScreen from './screens/MainScreen';
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
          <Route path="/" element={<MainScreen discover={true} />}/>
          <Route path="/topcharts/:topcharts" element={<MainScreen discover={false} />}/>
          <Route path="/topartists/:artists" element={<MainScreen discover={false} />}/>
          <Route path="/song/:key" element={<MainScreen discover={false} />}/>
          <Route path="/artist/:id" element={<MainScreen discover={false} />}/>
      </Routes>
    </Router>
  );
}

export default App;
