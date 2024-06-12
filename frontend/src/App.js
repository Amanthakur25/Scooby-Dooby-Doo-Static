import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
import PhotoGalary from './Component/galary/PhotoGalary';
import VideoGallery from './Component/galary/VideoGallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photo-galary" element={<PhotoGalary />} />
          <Route path="/video-galary" element={<VideoGallery />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
