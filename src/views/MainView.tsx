import NavBar from '@/components/NavBar';
import { useState } from 'react';
import About from '@/components/About';
import Resume from '@/components/Resume';
import { MainThemes } from '@/themes/MainThemes';
import Games from '@/components/Games';
import VFX from '@/components/VFX';

export default function MainView() {
  const [tab, setTab] = useState(0);

  return (
    <MainThemes.Holder>
      <NavBar setTab={setTab} tab={tab} />
      {/* {tab} */}
      {tab === 0 && <About />}
      {tab === 1 && <Resume />}
      {tab === 2 && <Games />}
      {tab === 3 && <VFX />}
    </MainThemes.Holder>
  );
}
