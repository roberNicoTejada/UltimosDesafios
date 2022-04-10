import { Form,Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './contacto.css'

function Contacto() {

    return (
        <>
            <div class="separador"></div>
            <main>
                <section>
                    <Container className="containerFormulario mt-5">
                        <div className="boxFormulario">

                            <h1 className="p-3 ps-2 text-start h3 wow animate__animated animate__fadeIn" data-wow-delay="1s">
                                    Contactate con Nosotros
                            </h1>

                            <Form className="ms-2 pb-4 fw-bold">

                                {/* <!-- Nombre y Email --> */}
                                <Row className="wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                                    <Col lg={6} md={6} sm={12} className="pb-3">
                                        <Form.Group controlId="contactForm.ControlInput1">
                                            <Form.Label>
                                                Nombre Completo
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Nombre Completo" required />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} className="pb-3">
                                        <Form.Group controlId="contactForm.ControlInput2">
                                            <Form.Label>
                                                Dirección de email
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Email" required/>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* <!-- Asunto - Lista desplegable --> */}
                                <Form.Group className="mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.3s" controlId="contactForm.ControlInput3">
                                    <Form.Label>Asunto</Form.Label>
                                    <Form.Select>
                                        <option>Escriba o elija una opción</option>
                                        <option value="1">Maquillaje</option>
                                        <option value="2">Pedicuria</option>
                                        <option value="3">Peinado</option>
                                        <option value="4">Pestañas</option>
                                        <option value="5">Uñas</option>
                                    </Form.Select>
                                </Form.Group>

                                {/* <!-- Mensaje --> */}
                                <Form.Group className="mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.4s" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>
                                        Mensaje
                                    </Form.Label>
                                    <Form.Control as="textarea"  placeholder="Mensaje" rows={3} />
                                </Form.Group>

                                {/* <!-- Newsletter --> */}
                                <Form.Check type="checkbox" id="contactCheckbox" className="mb-3 wow animate__animated animate__fadeIn" data-wow-delay="0.5s" label="¿Desea recibir Newsletter?"/>

                                {/* <!-- Botones --> */}
                                <Row className="gap-2 wow animate__animated animate__fadeIn" data-wow-delay="0.6s" >
                                    <Col sm={12} md={2} lg={3}>
                                        <Button type="submit" variant="dark" className="w-100">
                                            Enviar
                                        </Button>
                                    </Col>
                                    <Col sm={12} md={2} lg={3}>
                                        <Button type="reset" variant="dark" className="w-100">
                                            Reset
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>

                        </div>
                    </Container>
                </section>
            </main>    

            <div className="separador"></div>
        
        </>
    )
}

export default Contacto
