import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav2 from './RightNav2';

const StyledBurger = styled.div`
  width: 1.8rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 8px;
  z-index: 99;
  display: none;
  margin-right: 20px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.8rem;
    height: 0.30rem;
    background: linear-gradient(0.25turn, #ffffff, #ffffff);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;


    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav2 open={open}/>
    </>
  )
}

export default Burger
