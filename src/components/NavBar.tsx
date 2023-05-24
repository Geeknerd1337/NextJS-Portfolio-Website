import { NavBarThemes } from '@/themes/NavBarThemes';
import { useState, useEffect } from 'react';

interface NavBarProps {
  //Prop for a function to set a tab number
  setTab: (tab: number) => void;
  tab: number;
}

export default function NavBar({ setTab, tab }: NavBarProps) {
  const [commandText, setCommandText] = useState('> ');
  const [scrollText, setScrollText] = useState('> ');
  const [commandCursor, setCommandCursor] = useState('_');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

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
          //On click set the tab to 0, and add the command to the command history
          onClick={() => {
            setTab(0);
            setCommandHistory([
              ...commandHistory,
              commandText.substring(1, commandText.length),
            ]);
          }}
          active={tab === 0}
        >
          ABOUT
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() => setCommandText('> cd /joshwilson/resume.txt')}
          onMouseLeave={() => {
            setCommandText('> ');
          }}
          onClick={() => {
            setTab(1);
            setCommandHistory([
              ...commandHistory,
              commandText.substring(1, commandText.length),
            ]);
          }}
          active={tab === 1}
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
          onClick={() => {
            setTab(2);
            setCommandHistory([
              ...commandHistory,
              commandText.substring(1, commandText.length),
            ]);
          }}
          active={tab === 2}
        >
          GAMES
        </NavBarThemes.NavBarButton>
        <NavBarThemes.NavBarButton
          onMouseEnter={() => setCommandText('> cd /joshwilson/mywork/vfx.txt')}
          onMouseLeave={() => {
            setCommandText('> ');
          }}
          onClick={() => {
            setTab(3);
            setCommandHistory([
              ...commandHistory,
              commandText.substring(1, commandText.length),
            ]);
          }}
          active={tab === 3}
        >
          VFX
        </NavBarThemes.NavBarButton>
      </NavBarThemes.Background>
      <NavBarThemes.NavTerminalBackground>
        <div className="commands">
          <div className="command">
            {scrollText}
            {commandCursor}
          </div>
          <div className="commandHistory">
            {commandHistory.map((command, index) => {
              return (
                <div key={index}>
                  {command}
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </NavBarThemes.NavTerminalBackground>
    </>
  );
}
