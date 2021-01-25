
import './App.css';
import Product from './Product/Product'; 
import { useState } from 'react';

const app = props => {
 
  useState();



    return (
    <div className="App">
      <h1> Андрей вода</h1>
      <button onClick = {this.switchNameHandler}>Switch Product</button>
      <Product name = {this.state.products[0].name}  price = {this.state.products[0].price}/> 
      <Product name = {this.state.products[1].name}  price = {this.state.products[1].price}/> 
      <Product name = {this.state.products[2].name}  price = {this.state.products[2].price}/> 
    </div>
    );

  
}

export default app;
