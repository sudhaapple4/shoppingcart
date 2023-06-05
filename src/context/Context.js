import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { useId } from 'react';
import { cartReducer,productReducer } from './Reducers';
import { v4 as uuid } from 'uuid';

const Cart  = createContext();
faker.seed(99)
const Context = ({children}) => {
    let id = useId()
    const GetId=()=>{const id = useId()}
    const products = [...Array(20)].map(()=>({
        id: uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0,1,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }))
    console.log(products)
    const [state,dispatch] = useReducer(cartReducer,{
        products: products,
        cart:[]
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });

  return <Cart.Provider value={{state,dispatch, productState, productDispatch }}>{children}</Cart.Provider>
}

export default Context;
export const CartState=()=>{
    return useContext(Cart)
}