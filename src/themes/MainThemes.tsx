import styled from '@emotion/styled';
import { Colors } from './Colors';
import { down } from 'styled-breakpoints';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.Background};
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
`;

const Holder = styled.div`
  width: 50%;

  ${down('md')} {
    width: 90%;
  }

  display: flex;
  top: 10vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainThemes = {
  Background,
  Holder,
};
