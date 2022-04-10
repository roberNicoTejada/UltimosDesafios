import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
// import {onAddComprarAhora} from '../../../utils/events'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

function ItemDetail(props) {

    console.log("ItemDetail")
    console.log(props)
    const { agregarProducto } = useCartContext()
    const [count, setCount] = useState(1)    
    const [button, setButton] = useState('AgregarCarrito')

    function onAddCart(cant) {

        console.log("onAddCart")
        setCount(cant)
        setButton('CheckoutCarrito')
        agregarProducto( { item:props.item, cantidad:cant } )
        console.log({ item:props.item, cantidad:cant })
    
    }

    function onAdd(cant) {
        setCount(cant)
    }

    const AgregarCarrito = () => {

        return (

            <div>
                <button id={props.item.id} 
                        type="button" 
                        onClick={()=>onAddCart(count)}
                        className="btn btn-dark w-100 mt-3">
                                
                            Agregar al carrito
                                
                            <svg xmlns="http://www.w3.org/2000/svg" width="25"height="25" fill="currentColor" className="bi bi-cart3 ps-2" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            
                </button>
            </div>

        )

    }

    const CheckoutCarrito = () => {

        return (

            <Link to='/cart'>
                <div>
                    <button id={props.item.id} 
                            type="button"  
                            className="btn btn-primary w-100 mt-3">
                                
                        Ir al carrito
                            
                    </button>
                </div> 
            </Link>

        )

    }    

    return (

        <div className="row">
            
            {/* Imagen Producto */}
            <div className="col">
                <img src={props.item.imagen} alt={props.item.alt} className="img-fluid"/>        
            </div>
            
            <div className="col">

                {/* Nombre Producto */}
                <div className="fw-bold mb-2 productoMakeup productoMakeup--title">
                    {props.item.nombre}
                </div>
                
                {/* Precio */}
                <div className="text-muted mb-2 productoMakeup--fontSize">
                    {'$ ' + parseFloat(props.item.precio).toFixed(2)}
                </div>

                {/* Contador */}
                <div className="mb-2 productoMakeup--widthCount">
                    {/* <ItemCount stock={props.item.stock} onAdd={()=>onAdd(count)}/> */}
                    <ItemCount id={props.item.id} stock={props.item.stock} onAdd={onAdd} initial={1}/>
                </div>

                {/* Stock */}
                <div className="mt-3">
                    <div className="fw-bold productoMakeup productoMakeup--fontSize--stock">
                        Stock Disponible
                    </div>

                    <div className="text-muted">
                        {props.item.stock + ' Unidades'}
                    </div>
                </div>
                
                {/* Agrega un paso intermedio(boton Ir al carrito) antes de ir al carrito */}
                <div className='productoMakeup--widthButton'>
                
                    {
                        button === 'AgregarCarrito' ? <AgregarCarrito/>
                                                    : <CheckoutCarrito/>        
                    }

                    {/* Boton Comprar Ahora */}
                    {/* <div className="w-75">
                        <button id={props.item.id} 
                                type="button" 
                                onClick={onAddComprarAhora} 
                                className="btn btn-dark w-100 mt-3">
                            
                            Comprar Ahora
                        
                        </button>
                    </div> */}

                    {/* Boton Agregar Carrito */}
                    {/* <Link to='/cart'>
                        <div className="w-75">
                            <button id={props.item.id} 
                                    type="button" 
                                    // onClick={onAddShoppingCart} 
                                    onClick={()=>onAddCart(count)}
                                    className="btn btn-dark w-100 mt-3">
                                
                                Agregar al carrito
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="25"height="25" fill="currentColor" className="bi bi-cart3 ps-2" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            
                            </button>
                        </div>
                    </Link> */}

                </div>

            </div>

        </div>
    )
}

export default ItemDetail
