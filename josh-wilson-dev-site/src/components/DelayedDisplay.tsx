import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';

interface DelayedDisplayProps {
  delay: number;
  children: JSX.Element;
}

const Cover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.LightAmber};
`;

const Holder = styled.div`
  position: relative;
`;

const DelayedDisplay = (props: DelayedDisplayProps) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, props.delay / 2);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Holder>
      {display && (
        <Cover initial={{ opacity: 1 }} animate={{ opacity: 0 }}></Cover>
      )}
      <div
        style={{
          opacity: display ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </Holder>
  );
};

export default DelayedDisplay;
