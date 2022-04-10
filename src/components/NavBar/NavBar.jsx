import React from "react";
import CartWidget from "./CartWidget";
import "../NavBar/navBar.css";
import Logo from "./images/logodiaz.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <Container>
          {/* <!-- Logo --> */}
          <Link to="/" className="navbar-brand ms-3">
            {/* <a className="navbar-brand ms-3" href="index.html"> */}

            <img
              src={Logo}
              alt="logo"
              className="logo__img--center wow animate__animated animate__flipInX"
            />

            {/* </a> */}
          </Link>

          {/* <!-- Boton Hamburguesa --> */}
          <button
            className="navbar-toggler custom-toggler me-4 wow animate__animated animate__bounceInDown"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Menu listado de opciones --> */}
          <div className="collapse navbar-collapse pe-5" id="navbarNav">
            <ul id="menuHeader" className="navbar-nav ms-auto">
              {/* <Link to='/' className="text-decoration-none"> */}
              <li className="nav-item">
                <Link
                  to="/"
                  className="text-decoration-none nav-link fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  data-wow-delay="0.2s"
                >
                  {/* <a className="nav-link fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                        href="index.html" 
                                        data-wow-delay="0.2s"> */}
                  Home
                  {/* </a> */}
                </Link>
              </li>
              {/* </Link> */}

              {/* <Link to='/nosotros' className="text-decoration-none"> */}
              <li className="nav-item">
                <Link
                  to="/nosotros"
                  className="nav-link  text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  href="html/nosotros.html"
                  data-wow-delay="0.3s"
                >
                  Nosotros
                </Link>
              </li>
              {/* </Link> */}

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  href="home"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul
                  className="dropdown-menu bg-secondary"
                  aria-labelledby="navbarDropdown"
                >
                  {/* <Link to='/productos/maquillaje' */}
                  {/* className="text-decoration-none">     */}
                  <li>
                    <Link
                      to="/productos/maquillaje"
                      className="dropdown-item  text-decoration-none text-white hoverOpciones"
                      href="test"
                    >
                      Maquillaje
                    </Link>
                  </li>
                  {/* </Link> */}

                  {/* <Link to='/productos/uñas' className="text-decoration-none"> */}
                  <li>
                    <Link
                      to="/productos/uñas"
                      className="dropdown-item text-decoration-none text-white hoverOpciones"
                      href="test"
                    >
                      Uñas
                    </Link>
                  </li>
                  {/* </Link> */}
                </ul>
              </li>

              {/* <Link to='/galeria' className="text-decoration-none"> */}
              <li className="nav-item">
                <Link
                  to="/galeria"
                  className="nav-link text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  href="html/galeria.html"
                  data-wow-delay="0.6s"
                >
                  Galería
                </Link>
              </li>
              {/* </Link> */}

              {/* <Link to='/contacto' className="text-decoration-none"> */}
              <li className="nav-item">
                <Link
                  to="/contacto"
                  className="nav-link text-decoration-none fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                  href="html/contacto.html"
                  data-wow-delay="0.6s"
                >
                  Contacto
                </Link>
              </li>
              {/* </Link> */}

              <Link to="/cart">
                <li>
                  <CartWidget />
                </li>
              </Link>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default NavBar;
