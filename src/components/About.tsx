import DelayedDisplay from './DelayedDisplay';
import { AboutThemes } from '@/themes/AboutThemes';
import LinkButton from './LinkButton';
import Skill from './Skill';

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
              <LinkButton
                src="linkedin.svg"
                alt="LinkedIn"
                href="https://www.linkedin.com/in/joshua-wilson-87904a198/"
              />
            </DelayedDisplay>
            <DelayedDisplay delay={175}>
              <LinkButton
                src="twitter.svg"
                alt="Twitter"
                href="https://twitter.com/StaticLoFi"
              />
            </DelayedDisplay>
            <DelayedDisplay delay={250}>
              <LinkButton
                src="youtube.svg"
                alt="YouTube"
                href="https://www.youtube.com/channel/UCos1upnZahaueYs6CcUwhfg"
              />
            </DelayedDisplay>
          </AboutThemes.LinkHolder>
        </AboutThemes.HeadshotHolder>

        <AboutThemes.InfoHolder>
          <DelayedDisplay delay={200}>
            <AboutThemes.Name>Josh Wilson</AboutThemes.Name>
          </DelayedDisplay>

          <DelayedDisplay delay={300}>
            <AboutThemes.Description>
              Hello, I&apos;m Josh Wilson! I am a full stack developer with a
              passion for learning and a love for problem solving. I am
              currently working as a developer at Harris Govern.
            </AboutThemes.Description>
          </DelayedDisplay>
        </AboutThemes.InfoHolder>
      </AboutThemes.Holder>

      <AboutThemes.SkillsHolder>
        <DelayedDisplay delay={400}>
          <AboutThemes.Skills>
            <div className="title">
              <div>SKILLS</div>
            </div>
            <div className="description">
              <Skill skill="C#" />
              <Skill skill="C++" />
              <Skill skill="Unity" />
              <Skill skill="Unreal" />
              <Skill skill="Docker" />
              <Skill skill="React" />
              <Skill skill="TypeScript" />
              <Skill skill="JavaScript" />
              <Skill skill="Python" />
              <Skill skill="Java" />
              <Skill skill="Rust" />
            </div>
          </AboutThemes.Skills>
        </DelayedDisplay>
        <AboutThemes.ExperienceHolder>
          <AboutThemes.Experience>
            <DelayedDisplay delay={500}>
              <AboutThemes.Skills>
                <div className="title">
                  <div>2D & 3D Game Development</div>
                </div>
                <div className="description">
                  With 12+ years of experience and a track record of 20+ game
                  releases, I have expertise in Unity, Unreal, Godot, and
                  Gamemaker. Proficient in C# and C++, I have worked in both
                  high-level and low-level environments.
                </div>
              </AboutThemes.Skills>
            </DelayedDisplay>
          </AboutThemes.Experience>
          <AboutThemes.Experience>
            <DelayedDisplay delay={600}>
              <AboutThemes.Skills>
                <div className="title">
                  <div>Desktop App Development</div>
                </div>
                <div className="description">
                  I&apos;ve worked on a variety of desktop applications written
                  in C#, C++, and VB.NET. I have experience with WPF, WinForms,
                  DevExpress, and more. I&apos;ve worked with a SQL Server,
                  Oracle, and MySQL.
                </div>
              </AboutThemes.Skills>
            </DelayedDisplay>
          </AboutThemes.Experience>
          <AboutThemes.Experience>
            <DelayedDisplay delay={700}>
              <AboutThemes.Skills>
                <div className="title">
                  <div>Server Side Apps with NextJS</div>
                </div>
                <div className="description">
                  I have experience with NextJS, React, TypeScript, and more.
                  This website is built with NextJS and React. I have experience
                  with Docker, Kubernetes, and more.
                </div>
              </AboutThemes.Skills>
            </DelayedDisplay>
          </AboutThemes.Experience>
          <AboutThemes.Experience>
            <DelayedDisplay delay={800}>
              <AboutThemes.Skills>
                <div className="title">
                  <div>Responsive Web Design</div>
                </div>
                <div className="description">
                  I have experience with HTML, CSS, and JavaScript. I have used
                  Bootstrap, Tailwind, and more. I have experience with
                  responsive web design and mobile-first design.
                </div>
              </AboutThemes.Skills>
            </DelayedDisplay>
          </AboutThemes.Experience>
        </AboutThemes.ExperienceHolder>
      </AboutThemes.SkillsHolder>
    </>
  );
}
