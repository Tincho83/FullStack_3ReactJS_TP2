import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Code404 from './components/Code404/Code404';



function App() {
  {/* */ }
  
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
          <Route path='*' element={ <Code404 /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  )
}

export default App

/*
    
*/