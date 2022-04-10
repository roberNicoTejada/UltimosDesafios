// import {useState} from 'react'
import ItemCount from '../../productos/ItemCount/ItemCount'
import { useCartContext } from '../../../context/CartContext'

function Cart(props) {

    console.log("Cart")
    const { eliminarItem, setIdDelete,cartList,setItemsCounter } = useCartContext()

    function onDelete(id) {

        console.log("onDelete")
        eliminarItem( id )
        setIdDelete(id)
        
        // Si al eliminar los items no queda nada pone el contador de items en 0
		console.log(cartList.length)
		
        if (cartList.length === 0) {
			setItemsCounter(0)
		}
    
    }

    return (
        
        <div className="container container-sm container-md container-lg">
            <div className="row text-muted align-items-center">
                            
                {/* <!-- Imagen --> */}
                <div className="col-2 col-lg-2 col-md-2">
                    <img src={props.item.item.imagen} className="img-fluid" alt={props.item.item.alt}/>
                </div>
                        
                <div className="col-5 col-lg-6 col-md-6">        
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      
                        {/* <!-- Producto --> */}
                        <div className="fw-bold nombreProductoCart">    
                            {props.item.item.nombre} 
                        </div>  
                    
                        {/* <!-- Cantidad --> */}
                        <div className='cartCountwidth'>
                            <ItemCount id={props.item.item.id}
                                    stock={props.item.item.stock} 
                                    initial={props.cantidad} 
                                    fromCart={true}/> 
                            <span className="fs-6 stockPadding">
                                {props.item.item.stock} disponibles
                            </span>       
                        </div>
                    
                    </div>
                </div>

                {/* <!-- Precio --> */}
                <div className="col-3 h6">    
                    $ {parseFloat(props.item.item.precio).toFixed(2)}
                </div>
                
                {/* <!-- Eliminar --> */}
                <div className="col">
                    <button  className="btn-black border-0" onClick={()=>onDelete(props.item.item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </div>
                <hr className="mt-4 solid"></hr>
            </div> 
        </div>                               

    )
}

export default Cart
