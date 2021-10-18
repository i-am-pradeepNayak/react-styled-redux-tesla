import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Section
        title={'Model s'}
        description="order inline for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title={'Model x'}
        description="order inline for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title={'Model y'}
        description="order inline for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="lowest cost solar"
        description="order inline for touchless delivery"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Solar for new roofs"
        description="order inline for touchless delivery"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Accessories"
        description="order inline for touchless delivery"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;
