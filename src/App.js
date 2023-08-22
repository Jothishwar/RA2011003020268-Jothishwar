import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Trains from './Components/Trains';
import Train from './Components/Train';
import { AppBar, Toolbar, Typography, Container, Button, IconButton } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#3949ab' }}>
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="train-icon"></IconButton>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', marginLeft: '10px' }}>
            TrainVue
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Trains />} />
          <Route path="/trains/:trainId" element={<Train />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;