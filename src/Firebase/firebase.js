import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where,doc,getDoc } from 'firebase/firestore';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyCKqiDPbMwMsNSLL4YvwIvLK1wIvo6VM2s",
    authDomain: "makeup-ecommerce.firebaseapp.com",
    projectId: "makeup-ecommerce",
    storageBucket: "makeup-ecommerce.appspot.com",
    messagingSenderId: "1029959937004",
    appId: "1:1029959937004:web:c4578d7699f6b4368caec9",
    measurementId: "G-6TRBR0DQ3X"

};

const app = initializeApp(firebaseConfig);

// Obtiene la conexion a bd
export const db = getFirestore(app);

async function getProductFiltered(tabla,field, operator,condition) {

    // Obtiene la coleccion a tratar
    // const productosCol = collection(db, 'productos');

    // Obtiene los documentos de la coleccion sin filtro(todo)
    // const productoSnapshot = await getDocs( productosCol );

    // Create a query against the collection.
    const buildQuery = query(collection(db, `${tabla}`), where(`${field}`, `${operator}`, `${condition}`));

    // Obtiene los documentos filtrados
    const productoSnapshot = await getDocs( buildQuery );
    
    // Obtiene los documentos en un array
    const productoList = productoSnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }));

    return productoList;

}

export async function getProductById(tabla,id) {
    
    const productoSnap = await getDoc( doc( db, `${tabla}`, `${id}`) )

    return { id:productoSnap.id, ...productoSnap.data() }

}

export default getProductFiltered