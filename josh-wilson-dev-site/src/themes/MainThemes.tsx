import styled from '@emotion/styled';
import { Colors } from './Colors';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.Background};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainThemes = {
  Background,
};
