
import './App.css';
import Product from './Product/Product'; 
import React, { useState } from 'react';

const App = props => {
  const [productsState, setProductsState]  = useState({
    products: [
      { name: 'Системы очистки воды', price: 5000}, 
      { name: 'Фильтры для воды', price: 5000}, 
      { name: 'Мини-бары', price: 5000}, 

    ], 
    otherState: 'some other value'
  });


  console.log(productsState);

  const switchNameHandler = () => {
    setProductsState({
      products: [
        { name: 'Системы очистки воды222', price: 2000}, 
        { name: 'Фильтры для воды222', price: 2000}, 
        { name: 'Мини-бары222', price: 2000}, 
  
      ], 
    });
  };
  



    return (
    <div className="App">
      <h1> Андрей вода</h1>
      <button onClick = {switchNameHandler}>Switch Product</button>
      <Product name = {productsState.products[0].name}  price = {productsState.products[0].price}/> 
      <Product name = {productsState.products[1].name}  price = {productsState.products[1].price}/> 
      <Product name = {productsState.products[2].name}  price = {productsState.products[2].price}/> 
    </div>
    );

  
};

export default App;


