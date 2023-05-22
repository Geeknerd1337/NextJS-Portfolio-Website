import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Colors } from './Colors';

const Background = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  z-index: 1;
`;

interface NavBarButtonProps {
  active?: boolean;
  onClick?: () => void;
}

const NavBarButton = styled(motion.div)<NavBarButtonProps>`
  color: ${Colors.LightAmber};
  text-shadow: 0px 0px 10px ${Colors.Amber};
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 2vw;
  padding: 5px;
  margin-right: 5px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    color: ${Colors.Background};
    background-color: ${Colors.LightAmber};
    transform: scale(1.2);
    text-shadow: 0px 0px 10px ${Colors.Amber};
    box-shadow: 0px 0px 10px ${Colors.Amber};
  }
`;

const NavTerminalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );

  z-index: 0;
  top: 0px;
  left: 0px;

  display: flex;

  & > .commands {
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 1vw;
    left: 1vw;
    font-size: 2vh;
    flex-direction: column;
    font-family: 'Roboto Mono';
    .command {
      color: ${Colors.LightAmber};
      white-space: pre-wrap;
    }

    .commandHistory {
      color: ${Colors.LightBackground};
    }
  }
`;

export const NavBarThemes = {
  Background,
  NavBarButton,
  NavTerminalBackground,
};
