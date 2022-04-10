import React from "react";
import { Link } from "react-router-dom";
import {
  BsEnvelope,
  BsTelephone,
  BsHouse,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    // <!-- Footer -->
    <footer className="bg-dark">
      <div className="container-fluid">
        <div className="row p-5 pb-1">
          {/* <!-- Columna Contacto --> */}
          <div className="col-lg-4 col-md-6 col-sm-12 ps-md-5">
            <p className="h6 text-uppercase text-white fw-bold mb-3 letterSpacing">
              Contacto
            </p>
            <div className="mb-2 mb-lg-3">
              <a
                href="https://www.google.com/maps/place/Praia+dos+Ingleses/@-27.4348599,-48.396024,15z/data=!3m1!4b1!4m5!3m4!1s0x952769fc6bfe7f01:0xf8143f736603057c!8m2!3d-27.4371624!4d-48.3894599"
                className=" text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsHouse className="me-1" />
                Dos Ingleses, Brasil
              </a>
            </div>
            <div className="mb-2 mb-lg-3">
              <a
                href="mailto:info@gmail.com"
                className="text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-envelope"></i> */}
                <BsEnvelope className="me-1" />
                info@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://api.whatsapp.com/send?phone=5411618107&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Makeup."
                className="text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-telephone"></i> */}
                <BsTelephone className="me-1" />
                +5411111111
              </a>
            </div>
          </div>

          {/* <!-- Columna Secciones --> */}
          <div className="col-lg-4 col-md-6 col-sm-12 ps-lg-5">
            <p className="h6 text-uppercase text-white fw-bold mb-3 letterSpacing">
              Secciones
            </p>

            <div className="mb-2 mb-lg-3 ">
              <Link to="/home" className="text-decoration-none textoFooter">
                {/* <a href="index.html" className=" text-decoration-none textoFooter"> */}
                Home
                {/* </a> */}
              </Link>
            </div>

            <div className="mb-2 mb-lg-3 ">
              <Link to="/nosotros" className="text-decoration-none textoFooter">
                {/* <a href="html/nosotros.html" className=" text-decoration-none textoFooter"> */}
                Nosotros
                {/* </a> */}
              </Link>
            </div>

            <div className="mb-2 mb-lg-3 ">
              <Link to="/galeria" className="text-decoration-none textoFooter">
                {/* <a href="html/galeria.html" className=" text-decoration-none textoFooter"> */}
                Galería
                {/* </a> */}
              </Link>
            </div>

            <div className="mb-4 ">
              <Link to="/contacto" className="text-decoration-none textoFooter">
                {/* <a href="html/contacto.html" className=" text-decoration-none textoFooter"> */}
                Contacto
                {/* </a> */}
              </Link>
            </div>
          </div>

          {/* <!-- Columna Redes Sociales --> */}
          <div className="col-lg-4 col-md-12 col-sm-12 ps-md-5">
            <p className="h6 text-uppercase text-white fw-bold mb-4 letterSpacing">
              Redes Sociales
            </p>
            <div className="mb-2 mb-lg-3 ">
              <a
                href="https://www.facebook.com/Elidiazmkp-102206465077886/about/?ref=page_internal"
                className="me-1  text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-facebook"></i> */}
                <BsFacebook className="me-1" />
                Facebook
              </a>
            </div>

            <div className="mb-2 mb-lg-3 ">
              <a
                href="https://twitter.com/?lang=es"
                className="me-1  text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-twitter"></i> */}
                <BsTwitter className="me-1" />
                Twitter
              </a>
            </div>

            <div className="mb-2 mb-lg-3 ">
              <a
                href="https://www.instagram.com/elidiazmkp/"
                className="me-1  text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-instagram"></i> */}
                <BsInstagram className="me-1" />
                Instagram
              </a>
            </div>

            <div className="mb-2 mb-lg-3 ">
              <a
                href="https://ar.linkedin.com/"
                className="me-1  text-decoration-none textoFooter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="bi bi-linkedin"></i> */}
                <BsLinkedin className="me-1" />
                Linkedin
              </a>
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div className="col-12 text-center m-3 text-muted">
            © 2021 Copyright
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container-fluid --> */}
    </footer>
  );
}

export default Footer;
