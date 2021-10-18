import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.backgroundImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.85;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <ItemText>
        <h1> {title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
