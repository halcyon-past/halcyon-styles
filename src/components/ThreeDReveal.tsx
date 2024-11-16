// src/components/ThreeDReveal.tsx
import React from 'react';
import styled from 'styled-components';

// Props for dynamic children
interface ThreeDRevealProps {
  children: React.ReactNode;
}

// Styled container for the 3D reveal effect
const RevealContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(1000px);

  /* Child item styles */
  img {
    transition: 0.5s;
    filter: brightness(0);
    height: 200px;

    &:hover {
      filter: brightness(1);
      transform: translateZ(200px);
    }

    &:hover ~ img {
      filter: brightness(0.6);
      transform: translateZ(150px) rotateY(20deg);
    }

    &:hover ~ img ~ img {
      filter: brightness(0.4);
      transform: translateZ(70px) rotateY(10deg);
    }

    &:has(+ img:hover) {
      filter: brightness(0.6);
      transform: translateZ(150px) rotateY(-20deg);
    }

    &:has(+ img + img:hover) {
      filter: brightness(0.4);
      transform: translateZ(70px) rotateY(-10deg);
    }
  }
`;

// Main ThreeDReveal component
const ThreeDReveal: React.FC<ThreeDRevealProps> = ({ children }) => {
  return <RevealContainer>{children}</RevealContainer>;
};

export default ThreeDReveal;
