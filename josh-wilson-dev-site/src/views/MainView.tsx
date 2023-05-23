import NavBar from '@/components/NavBar';
import { useState } from 'react';
import About from '@/components/About';
import { MainThemes } from '@/themes/MainThemes';

export default function MainView() {
  const [tab, setTab] = useState(0);

  return (
    <MainThemes.Holder>
      <NavBar setTab={setTab} />
      {tab}
      {tab === 0 && <About />}
    </MainThemes.Holder>
  );
}
