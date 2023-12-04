// Header.jsx
import React, { useState } from 'react';
import { NavItem, HeaderContainer, ButtonRegister, Logo, ButtonContainer, ButtonLogIn, Nav } from './HeaderStyled';
import RegistrationForm from '../Registration/Registration';
import Modal from '../Modal';
import Login from '../Login';


const Header = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const hasToken = false;

  const openModal = (content: any) => {
    setModalContent(content);
    setRegistrationOpen(true);
  };

  const closeModal = () => {
    setRegistrationOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Nanny.Services</Logo>
      <div style={{ display: 'flex' }}>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {hasToken && <NavItem to="/favorites">Favorites</NavItem>}
          <NavItem to="/nannies">Nannies</NavItem>
        </Nav>
        <ButtonContainer>
          <ButtonLogIn onClick={() => openModal(<Login />)}>Log In</ButtonLogIn>
          <ButtonRegister onClick={() => openModal(<RegistrationForm />)}>Registration</ButtonRegister>
        </ButtonContainer>
      </div>
      {isRegistrationOpen && <Modal children={modalContent} onClose={closeModal} />}
    </HeaderContainer>
  );
};

export default Header;
