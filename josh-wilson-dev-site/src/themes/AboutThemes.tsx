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
    padding-bottom: 4vh;
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
  SkillsHolder: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  `,
  Skills: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.Amber};
    color: ${Colors.Background};
    padding: 0.5vh;
    font-family: 'Roboto Mono';
    font-weight: 1000;
    width: 100%;

    border: 1px solid ${Colors.Amber};

    height: 100%;

    .title {
      width: 100%;
      font-size: 1.5vw;
      font-family: 'Roboto Mono';
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    & > .description {
      width: 100%;
      background-color: ${Colors.Background};
      padding: 1.5vh;
      justify-content: center;
      align-items: flex-start;
      gap: 1vw;
      flex-wrap: wrap;
      display: flex;
      color: ${Colors.Amber};
      flex-grow: 1;
      height: 100%;
      font-family: 'Roboto Mono';
    }
  `,
  ExperienceHolder: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 1vh;

    gap: 1vw;
  `,
  Experience: styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 23vh;
  `,
};
