import { MenuRounded } from '@mui/icons-material';
import { Icon, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuRounded)`
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>
      <Menu>
        <p>
          <a href="#">Models S</a>
        </p>
        <p>
          <a href="#">Models 3</a>
        </p>
        <p>
          <a href="#">Models X</a>
        </p>
        <p>
          <a href="#">Models X</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
      </RightMenu>
      <CustomMenu />
    </Container>
  );
};

export default Header;
