import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/inicio' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/productos' activeStyle>
            Productos
          </NavLink>
          <NavLink to='/ventas' activeStyle>
            Ventas
          </NavLink>
          <NavLink to='/administrador' activeStyle>
            Administrador
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/iniciar-sesion'>Iniciar Sesion</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;