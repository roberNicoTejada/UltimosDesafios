import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { onAddShoppingCart } from '../../../utils/events'
import ItemList from '../ItemList/ItemList'
import Display404 from '../../404/Display404'
import getProductFiltered from '../../../Firebase/firebase'
import createDocsGalery from '../../../Firebase/firebase'

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams(); //toma el parametro de la url y lo guarda en una variable categoriaId.

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {

        try {
            const items = await getProductFiltered('productos','categoria','==',categoriaId)
            setProductos(items)
            const data = createDocsGalery()
            console.log("Data")
            console.log(data)
        }
        catch (error) {
            console.log(error)    
        }
        finally{
            setLoading(false)
        }

    }, [categoriaId])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect( async () => {

    //     try {

    //         const data = createDocsGalery()
    //         console.log(data)    
    //     }
    //     catch (error) {
    //         console.log(error)    
    //     }
    //     finally{
    //         setLoading(false)
    //     }

    // }, [categoriaId])

    return (
        <>       
            { 
                loading ? <h2>Cargando...</h2> 
                        : productos.length > 0 ? <ItemList productos={productos} onAddShoppingCart={onAddShoppingCart}/>
                                               : <Display404/>     
            }
        </>    

    )
}

export default ItemListContainer
