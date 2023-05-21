import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Colors } from './Colors';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
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

export const NavBarThemes = {
  Background,
  NavBarButton,
};
