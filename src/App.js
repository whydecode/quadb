import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import BookingScreeen from './screens/BookingScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/shows/:id" element={<SummaryScreen />} />
        <Route path="/booking/:id" element={<BookingScreeen />} />
      </Routes>
    </Router>
  );
};

export default App;
