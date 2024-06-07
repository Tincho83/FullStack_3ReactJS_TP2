import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount/ItemCount';
import Header from './components/Header/Header';
import CustomMap from './components/CustomMap/CustomMap';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const code404 = () => (
  <div>
    <p className='tituloError'>Error 404: Pagina o URL No Encontrado</p>
    <p className='subtituloError'>Lo siento, la página que estás buscando no se pudo encontrar.</p>
  </div>
);

function App() {
  {/* */ }
  //console.log("001*Inicio: App");
  //debugger;
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
          <Route path='*' element={code404()} />
        </Routes>
      </BrowserRouter>
      <CustomMap />
    </ChakraProvider>
  )
}

export default App

/*
    <ChakraProvider>
      <Header />
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>Error 404: No Encontrado</h1>} />
        </Routes>
      </BrowserRouter>
      <ItemCount />
      <CustomMap />
    </ChakraProvider>

*/