import { useState, useEffect } from 'react'
import { useCartContext } from '../../../context/CartContext'

function ItemCount(props) {

    console.log("ItemCount");
    console.log(props);

	const { cartList, setCartList,itemsCounter, setItemsCounter } = useCartContext()
	const [cant, setCant] = useState(props.initial);

	// Se usa useEffect porque despues del primer seteo de props.initial
	// a cant no ocurre todas las veces que se renderiza de nuevo.
	// Ejemplo en el cart cuando se elimina un item nunca setea la cantidad correcta
	// con useEffect se logra actualizar cant cada vez que cambia props.initial	
	useEffect(() => { 
	
		setCant(props.initial) 
	
	}, [props.initial] )

	function sumar() {

		console.log("Sumar");
		
        if (cant < props.stock) {

			setCant(cant + 1);
			
            if (props.fromCart) {
                setCartList( cartList.map((item) => item.item.id === props.id ? { ...item, cantidad: cant + 1 } 
                                                                              : item )
                );
				setItemsCounter( itemsCounter + 1)
            } else {
                props.onAdd(cant + 1);
            }
		}

	}

	function restar() {

		console.log("Restar");

		if (cant > 1) {
		
            setCant(cant - 1);

            if (props.fromCart) {
                setCartList(cartList.map((item) => item.item.id === props.id 
                                                   ? { ...item, cantidad: cant - 1 } 
                                                   : item));
				setItemsCounter( itemsCounter - 1)									   
            } else {
                props.onAdd(cant - 1);
            }
		}
	}

	return (

		// <div className="h6 qtyBox d-flex align-items-center justify-content-around border w-75">
		<div className="h6 qtyBox d-flex align-items-center justify-content-around border w-100">	
			<div
				className="btnQty qtyMinus fs-3 ps-3 text-muted"
				role="button"
				onClick={restar}>
				-
			</div>
			<div className="qtyInput border-0 text-center form-control shadow-none text-muted">
				{cant}
			</div>
			<div
				className="btnQty qtyPlus fs-3 pe-3 text-muted"
				role="button"
				onClick={sumar}>
				+
			</div>
		</div>
        
	);

}

export default ItemCount