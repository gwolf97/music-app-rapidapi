import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainScreen from './screens/MainScreen';
import { useDispatch } from 'react-redux';
import { getTopCharts } from './actions/actions';

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTopCharts())
  }, [dispatch])

  return (
    <Router>
      <Routes>     
          <Route path="/" element={<MainScreen discover={true} />}/>
          <Route path="/topcharts/:topcharts" element={<MainScreen/>}/>
          <Route path="/topartists/:artists" element={<MainScreen/>}/>
          <Route path="/song/:key" element={<MainScreen/>}/>
          <Route path="/artist/:id" element={<MainScreen/>}/>
          <Route path="/search/:search" element={<MainScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
