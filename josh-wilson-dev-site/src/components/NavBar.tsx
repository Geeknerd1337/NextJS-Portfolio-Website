import { NavBarThemes } from '@/themes/NavBarThemes';
import { useState, useEffect } from 'react';

interface NavBarProps {
  //Prop for a function to set a tab number
  setTab: (tab: number) => void;
}

export default function NavBar({ setTab }: NavBarProps) {
  const [commandText, setCommandText] = useState('> ');
  const [scrollText, setScrollText] = useState('> ');
  const [commandCursor, setCommandCursor] = useState('_');

  //Command cursor blinking
  useEffect(() => {
    setTimeout(() => {
      if (commandCursor === '_') {
        setCommandCursor('');
      } else {
        setCommandCursor('_');
      }
    }, 500);
  }, [commandCursor]);

  useEffect(() => {
    if (scrollText.length < commandText.length) {
      setTimeout(() => {
        if (commandText.length > 1) {
          setScrollText(commandText.substring(0, scrollText.length + 1));
        }
      }, 5);
    } else {
      if (commandText.length <= 2) {
        setScrollText('> ');
      }
    }
  }, [scrollText, commandText]);

  return (
    <>
      <NavBarThemes.Background>
        <NavBarThemes.NavBarButton
          onMouseEnter={() => setCommandText('> cd /joshwilson/about.txt')}
          onMouseLeave={() => {
            setCommandText('> ');
          }}
        >
          ABOUT
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() => setCommandText('> cd /joshwilson/resume.txt')}
          onMouseLeave={() => {
            setCommandText('> ');
          }}
        >
          RESUME
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() =>
            setCommandText('> cd /joshwilson/mywork/games.txt')
          }
          onMouseLeave={() => {
            setCommandText('> ');
          }}
        >
          GAMES
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() => setCommandText('> cd /joshwilson/mywork/vfx.txt')}
          onMouseLeave={() => {
            setCommandText('> ');
          }}
        >
          VFX
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() =>
            setCommandText('> cd /joshwilson/personalinfo/contact.txt')
          }
          //On mouse leave set the scroll text back to the default as well as the command text
          onMouseLeave={() => {
            setCommandText('>');
          }}
        >
          CONTACT
        </NavBarThemes.NavBarButton>
      </NavBarThemes.Background>
      <NavBarThemes.NavTerminalBackground>
        <div className="commands">
          <div className="command">
            {scrollText}
            {commandCursor}
          </div>
          <div className="commandHistory"></div>
        </div>
      </NavBarThemes.NavTerminalBackground>
    </>
  );
}
