import DelayedDisplay from './DelayedDisplay';
import { AboutThemes } from '@/themes/AboutThemes';

export default function About() {
  return (
    <>
      <AboutThemes.HeadshotHolder>
        <DelayedDisplay delay={100}>
          <AboutThemes.Headshot src="headshot.png" alt="Josh Wilson Headshot" />
        </DelayedDisplay>
        <AboutThemes.InfoHolder>
          <DelayedDisplay delay={200}>
            <AboutThemes.Name>Josh Wilson</AboutThemes.Name>
          </DelayedDisplay>
          <DelayedDisplay delay={300}>
            <AboutThemes.Description>
              Hello, I'm Josh Wilson! I am a full stack developer with a passion
              for learning and a love for problem solving. I am currently
              working as a developer at Harris Govern!
            </AboutThemes.Description>
          </DelayedDisplay>
        </AboutThemes.InfoHolder>
      </AboutThemes.HeadshotHolder>
    </>
  );
}
