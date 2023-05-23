import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Colors } from './Colors';

export const AboutThemes = {
  Headshot: styled(motion.img)`
    height: 30vh;
    object-fit: cover;
  `,
  HeadshotHolder: styled.div`
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
  `,
  InfoHolder: styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
  `,
  Name: styled.div`
    padding-bottom: 2vh;
    font-size: 2vw;
    font-family: 'Roboto Mono';
    color: ${Colors.LightAmber};
    text-shadow: 0px 0px 10px ${Colors.Amber};
  `,
  Description: styled.div`
    font-size: 1vw;
    font-family: 'Roboto Mono';
    color: ${Colors.LightAmber};
    text-shadow: 0px 0px 10px ${Colors.Amber};
  `,
};
