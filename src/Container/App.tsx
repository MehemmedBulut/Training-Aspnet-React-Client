import React from 'react';
import { Footer, Header } from '../Components/Layout/Index';
import { Home, MenuItemDetails, NotFound, ShoppingCart } from '../Pages';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice';
import { useGetShoppingCartQuery } from '../Apis/ShoppingCartApi';

function App() {
  const dispatch = useDispatch();

  const {data,isLoading} = useGetShoppingCartQuery(
    "df71d35a-4793-4d50-906c-0ef5b69d20c8"
    );

    // useEffect(()=>{
    //   if(!isLoading){
    //     console.log(data.result)
    //     dispatch(setShoppingCart(data?.result?.carItems))
    //   }
    // }, [data]);
    useEffect(() => {
      if (!isLoading && data ) {
        dispatch(setShoppingCart(data.result?.cartItems));
      }
    }, [data]);

  return (
    <div>
      <Header/>
      <div className='pb-3'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/meuItemDetails/:menuItemId" 
          element={<MenuItemDetails/>}>
          </Route>
          <Route path="/shoppingCart" element={<ShoppingCart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
