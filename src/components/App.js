import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { Main, Content, Toolbar } from './styles';
import { Actors, MovieInformation, Movies, Navbar, Profile } from './index';

function App() {
  return (
    <Main>
      <CssBaseline />
      <Navbar />
      <Content>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />

        </Routes>
      </Content>

    </Main>
  );
}

export default App;
