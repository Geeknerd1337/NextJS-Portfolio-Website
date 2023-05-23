import DelayedDisplay from './DelayedDisplay';
import { AboutThemes } from '@/themes/AboutThemes';
import LinkButton from './LinkButton';

export default function About() {
  return (
    <>
      <AboutThemes.Holder>
        <AboutThemes.HeadshotHolder>
          <DelayedDisplay delay={100}>
            <AboutThemes.Headshot
              src="headshot.png"
              alt="Josh Wilson Headshot"
            />
          </DelayedDisplay>
          <AboutThemes.LinkHolder>
            <DelayedDisplay delay={125}>
              <LinkButton
                src="github.svg"
                alt="Github"
                href="https://github.com/Geeknerd1337"
              />
            </DelayedDisplay>
            <DelayedDisplay delay={150}>
              <LinkButton src="linkedin.svg" alt="LinkedIn" />
            </DelayedDisplay>
            <DelayedDisplay delay={175}>
              <LinkButton src="twitter.svg" alt="Twitter" />
            </DelayedDisplay>
            <DelayedDisplay delay={250}>
              <LinkButton src="youtube.svg" alt="Github" />
            </DelayedDisplay>
          </AboutThemes.LinkHolder>
        </AboutThemes.HeadshotHolder>

        <AboutThemes.InfoHolder>
          <DelayedDisplay delay={200}>
            <AboutThemes.Name>Josh Wilson</AboutThemes.Name>
          </DelayedDisplay>

          <DelayedDisplay delay={300}>
            <AboutThemes.Description>
              Hello, I'm Josh Wilson! I am a full stack developer with a passion
              for learning and a love for problem solving. I am currently
              working as a developer at Harris Govern.
            </AboutThemes.Description>
          </DelayedDisplay>
        </AboutThemes.InfoHolder>
      </AboutThemes.Holder>
    </>
  );
}
