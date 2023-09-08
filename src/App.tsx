import './App.css'
import Navbar from './navbar/navbar'
import Item from './item/item'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home/home'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    // Add the viewport meta tag dynamically
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no';

    // Append the meta tag to the document head
    document.head.appendChild(viewportMeta);

    // Clean up by removing the meta tag when the component unmounts
    return () => {
      document.head.removeChild(viewportMeta);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
