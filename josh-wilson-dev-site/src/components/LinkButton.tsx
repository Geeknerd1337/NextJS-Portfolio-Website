import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';
import { useState, useEffect } from 'react';
import { down } from 'styled-breakpoints';
interface LinkButtonProps {
  src?: string;
  alt?: string;
  href?: string;
}

const LinkImage = styled.img`
  width: 2vw;
  height: 2vw;
  ${down('sm')} {
    width: 5vw;
    height: 5vw;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const ToolTip = styled.div`
  position: absolute;
  font-family: 'Roboto Mono';
  color: ${Colors.LightAmber};
  background-color: ${Colors.Background};
  border: 1px solid ${Colors.LightAmber};
  padding: 5px;
  font-size: 0.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100%;
`;

const LinkHolder = styled.a`
  padding-bottom: 1vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LinkButton({ src, alt, href }: LinkButtonProps) {
  const [hover, setHover] = useState(false);

  //Typewriter effect
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (hover && alt) {
      const timer = setTimeout(() => {
        if (index < alt.length) {
          setText(text + alt[index]);
          setIndex(index + 1);
        }
      }, 25);
      return () => clearTimeout(timer);
    } else {
      setIndex(0);
      setText('');
    }
  }, [hover, index, text, alt]);

  return (
    <LinkHolder
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <LinkImage src={src} alt={alt}></LinkImage>
      {hover && <ToolTip>{text}</ToolTip>}
    </LinkHolder>
  );
}
