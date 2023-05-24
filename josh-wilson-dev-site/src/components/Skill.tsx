import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Colors } from '@/themes/Colors';

const SkillHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono';
  font-size: 1vw;
  color: ${Colors.Amber};
  text-shadow: 0px 0px 5px ${Colors.LightAmber};
  border: 1px solid ${Colors.Amber};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    color: ${Colors.Background};
    background-color: ${Colors.Amber};
    transform: scale(1.2);
    box-shadow: 0px 0px 5px ${Colors.LightAmber};
    border-radius: 0px;
  }

  padding: 1vh;
`;

interface SkillProps {
  skill: string;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <SkillHolder
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
    >
      {skill}
    </SkillHolder>
  );
}
