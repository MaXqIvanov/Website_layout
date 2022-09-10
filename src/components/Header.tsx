import React from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';

export const Header = () => {
  return (
    // <Navbar bg="transparent" variant="dark" expand="x-lg" className="custom_bg">
    //   <Navbar.Brand href="#home" className="navbar-brand"></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto nav">
    //       <div className="nav-elem">FAQ</div>
    //       <div className="nav-elem">Оплата и доставка</div>
    //       <div className="nav-elem">Возврат</div>
    //       <div className="nav-elem">Исследования</div>
    //       <div className="nav-elem">Личный кабинет</div>
    //       <div className="nav-elem">8 8 (800) 600-09-90</div>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar bg="transparent" variant="dark" expand="xl" className="custom_bg" collapseOnSelect>
      <Navbar.Brand title="Вернуться на главную" className="main_logo_div"></Navbar.Brand>
      <Navbar.Toggle className="main_nav_button" aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        collapseOnSelect
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto nav w-100 и justify-content-center">
            <div className="nav-elem ">FAQ</div>
            <div className="nav-elem">Оплата и доставка</div>
            <div className="nav-elem">Возврат</div>
            <div className="nav-elem">Исследования</div>
            <div className="nav-elem">Личный кабинет</div>
            <div className="nav-elem">8 8 (800) 600-09-90</div>
          </Nav>
          <div className="nav-basket">
            <div className="nav-basket-badge">
              <div>1</div>
            </div>
          </div>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};
