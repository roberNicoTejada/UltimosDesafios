import { createContext, useState, useContext } from "react";

// Se crea el contexto
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

	const [cartList, setCartList] = useState([]);
	// const [count, setCount] = useState(1);
	const [idDelete, setIdDelete] = useState(1);
	const [itemsCounter, setItemsCounter] = useState(0)

	const agregarProducto = (item) => {

		console.log("agregarProducto");
		let index = isInCart(item.item.id);

		// Si existe el item no lo agrega de nuevo
		if (index < 0) {
			setCartList([...cartList, item]);
			setItemsCounter(itemsCounter + item.cantidad)
		}

	};

	const isInCart = (id) => {

		let auxCarrito = cartList;
		const index = auxCarrito.findIndex((lista) => lista.item.id === id);

		return index;
	};

	const vaciarCarrito = () => {
		setCartList([]);
		setItemsCounter(0)
	};

	const eliminarItem = (id) => {

		console.log("eliminarItem");
		let auxCarrito = cartList;
		let index = isInCart(id);

		if (index >= 0) {

			if ( itemsCounter > cartList[index].cantidad ) {
				setItemsCounter(itemsCounter - cartList[index].cantidad)
			} 
			
			auxCarrito.splice(index, 1);
			setIdDelete(id);
		
		}

		setCartList(auxCarrito);

	};

	const terminarCompra = () => {

		setCartList([]);
		setItemsCounter(0)

	}

	return (

		<CartContext.Provider value={{  cartList,
                                        agregarProducto,
                                        setCartList,
                                        vaciarCarrito,
                                        eliminarItem,
                                        // count,
                                        // setCount,
                                        idDelete,
                                        setIdDelete,
										itemsCounter,
										setItemsCounter,
										terminarCompra }}>
			{children}
		</CartContext.Provider>

	);

}

export default CartContextProvider