import { MenuRounded } from '@mui/icons-material';
import {
  Drawer,
  Icon,
  IconButton,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const carModel = useSelector(state => state.SliceReducer.cars);
  console.log(carModel);
  const [Toggle, setToggle] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>

      <Menu>
        {carModel &&
          carModel.map(model => (
            <p>
              <a href="#">{model}</a>
            </p>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
      </RightMenu>
      <Drawer
        variant="temporary"
        open={Toggle}
        anchor="right"
        onClose={() => setToggle(!Toggle)}
      >
        <List>
          <ListItemButton sx={{ borderBottom: '2px solid black' }}>
            <ListItemText
              primary="Model S"
              sx={{ width: 300, textAlign: 'center' }}
            />
          </ListItemButton>
          <ListItemButton sx={{ borderBottom: '2px solid black' }}>
            <ListItemText
              primary="Model 3"
              sx={{ width: 300, textAlign: 'center' }}
            />
          </ListItemButton>
          <ListItemButton sx={{ borderBottom: '2px solid black' }}>
            <ListItemText
              primary="Model X"
              sx={{ width: 300, textAlign: 'center' }}
            />
          </ListItemButton>
          <ListItemButton sx={{ borderBottom: '2px solid black' }}>
            <ListItemText
              primary="Model Y"
              sx={{ width: 300, textAlign: 'center' }}
            />
          </ListItemButton>
        </List>
      </Drawer>

      <CustomMenu onClick={() => setToggle(!Toggle)} />
    </Container>
  );
};

export default Header;
