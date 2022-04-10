import { doc,getDoc } from 'firebase/firestore';

// Clase de Servicio que obtiene los productos
class productoService {

    // constructor(db){

    //     this.dbFirebase = db;

    // }

    static async getProductById(tabla,id,db) {
    
        console.log("getProductById")
        console.log(tabla,id,db)
        const productoSnap = await getDoc( doc( db, `${tabla}`, `${id}`) )
        console.log("productoSnap")
        console.log(productoSnap)
        console.log(productoSnap.data())

        return { id:productoSnap.id, ...productoSnap.data() }

    }    

} // class productoService

export default productoService