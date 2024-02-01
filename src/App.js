import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ShowList></ShowList>} />
        <Route path="/show/:id" element={<ShowDetails/>} />
        <Route path="/book/:id" element={<BookingForm></BookingForm>} />
      </Routes>
    </Router>
  );
}

export default App;
