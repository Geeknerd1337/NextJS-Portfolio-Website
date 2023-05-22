import NavBar from '@/components/NavBar';
import { useState } from 'react';
export default function MainView() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <NavBar setTab={setTab} />
    </div>
  );
}
