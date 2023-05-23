import DelayedDisplay from './DelayedDisplay';

export default function About() {
  return (
    <>
      <DelayedDisplay delay={100}>
        <h1>About</h1>
      </DelayedDisplay>
      <DelayedDisplay delay={200}>
        <h1>About</h1>
      </DelayedDisplay>
      <DelayedDisplay delay={300}>
        <h1>About</h1>
      </DelayedDisplay>
      <DelayedDisplay delay={1000}>
        <h1>About</h1>
      </DelayedDisplay>
    </>
  );
}
