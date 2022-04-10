import React from 'react'
import { useCartContext } from "../../../context/CartContext"
import CarritoVacio from '../CarritoVacio/CarritoVacio'
import ItemListCart from '../ItemListCart/ItemListCart'

function ItemCartContext() {

    console.log("ItemCartContext")
    
    const {cartList} = useCartContext()

    return (
        <>
            {
                cartList.length > 0 ? <ItemListCart items={cartList}/>
                                    : <CarritoVacio/>
            }
        </>
    )
}

export default ItemCartContext
