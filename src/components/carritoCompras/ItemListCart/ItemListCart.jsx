import React from 'react'
import Cart from '../Cart/Cart'
// import { onAddComprarAhora } from '../../../utils/events'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

function ItemListCart(props) {
    
    console.log("ItemListCart")

    const {vaciarCarrito, terminarCompra} = useCartContext()
    let total = 0

    function onClearCart() {
        vaciarCarrito()
    }

    function calcularTotal(items) {

        let total = 0
        for (let index = 0; index < items.length; index++) {        
            total += items[index].item.precio * parseInt(items[index].cantidad) 
        }
        return total

    }

    function onTerminarCompra(e) {

        e.preventDefault()
        // const orden = { }
        // ondragend.date = 
        // orden.buyer = { nombre: "luis", telefono: "1162548796", email: "luis@gmail.com" }
        // orden.total = calcularTotal(props.items)
        // orden.items = props.items.map(cartItem=>{
        //     return {id: cartItem.id, nombre: cartItem.nombre, precio:cartItem.precio}
        // })
        // console.log(orden)
        terminarCompra()
    
    }

    // Calcula el total
    total = parseFloat(calcularTotal(props.items)).toFixed(2) 

    return (
        
        <>
            <div className='separador'></div>
            {    
                // Llama a Itemproducto para renderizar cada imagen y le pasa parametros   
                props.items.map(item => <Cart key={item.id}
                                              item={item}
                                              cantidad={item.cantidad}/>
                )   
            }

            {/* Contenedor */}
            <div className="container container-sm container-md container-lg mt-2">

                {/* Total */}
                <div className="row text-muted align-items-center">                            
                    <div className="col col-lg-6 ">
                    </div>
                    <div className="col fw-bold fs-4">
                        Total
                    </div>
                    <div className="col fw-bold fs-4">
                        $ {total}
                    </div>
                    <hr className="mt-4 solid"></hr>
                </div>

                {/* Inicio - Botones Vaciar Carrito y Terminar compra */}
                <div className="d-flex gap-2 justify-content-end pt-2">
                            
                    <button type="button" 
                            onClick={onClearCart} 
                            className="btn btn-dark">
                        Vaciar carrito
                    </button>
                        
                    <Link to='/terminarCompra'>
                        <button type="button" 
                                onClick={onTerminarCompra} 
                                // onSubmit={onTerminarCompra}
                                className="btn btn-dark">
                            Terminar compra
                                    
                        </button>
                    </Link>

                </div>
                {/* Fin - Botones Vaciar Carrito y Terminar compra */}

            </div> {/* Contenedor */}

            <div className="separador"></div>

        </>
    )
}

export default ItemListCart
