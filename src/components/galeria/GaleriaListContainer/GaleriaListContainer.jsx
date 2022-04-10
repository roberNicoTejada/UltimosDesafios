import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getGaleria } from "../../../utils/getGaleria";
import "../../galeria/galeria.css";
// import ItemGaleria from '../ItemGaleria/ItemGaleria'
import ItemListGaleria from "../ItemListGaleria/ItemListGaleria";

function GaleriaListContainer() {
  const [galeria, setGaleria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //api Fetch()
    getGaleria
      .then((data) => {
        setGaleria(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // return () => {
    //     console.log('clean')
    // }
  }, []);

  return (
    <>
      <div class="separador"></div>
      <main>
        <section>
          <h1 className="text-center pb-4 wow animate__animated animate__fadeInUp">
            Galería
          </h1>

          <Container>
            <Row className="gy-3">
              {loading ? (
                <h2>Cargando...</h2>
              ) : (
                <ItemListGaleria galeria={galeria} />
              )}
            </Row>
          </Container>
        </section>
      </main>

      <div className="separador"></div>
    </>
  );
}

export default GaleriaListContainer;
