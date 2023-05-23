import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Colors } from './Colors';

export const AboutThemes = {
  Headshot: styled(motion.img)`
    height: 30vh;
    object-fit: cover;
  `,
  Holder: styled.div`
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    position: relative;
    gap: 2vw;
  `,
  InfoHolder: styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
  `,
  Name: styled.div`
    font-size: 2vw;
    font-family: 'Roboto Mono';
    color: ${Colors.LightAmber};
    text-shadow: 0px 0px 10px ${Colors.Amber};
    padding-bottom: 2vh;
  `,
  Description: styled.div`
    font-size: 1vw;
    font-family: 'Roboto Mono';
    color: ${Colors.LightAmber};
    text-shadow: 0px 0px 10px ${Colors.Amber};
  `,
  LinkHolder: styled.div`
    display: flex;
    gap: 1.5vh;
  `,
  HeadshotHolder: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
};
