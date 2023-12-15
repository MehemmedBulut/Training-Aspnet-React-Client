import React from 'react';
import { Footer, Header } from '../Components/Layout/Index';
import { Home, MenuItemDetails, NotFound } from '../Pages';
import { Routes,Route } from 'react-router-dom';


function App() {


  return (
    <div>
      <Header/>
      <div className='pb-3'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/meuItemDetails/:menuItemId" element={<MenuItemDetails/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
