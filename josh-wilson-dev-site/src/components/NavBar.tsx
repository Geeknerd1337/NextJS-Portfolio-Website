import { NavBarThemes } from '@/themes/NavBarThemes';

export default function NavBar() {
  return (
    <NavBarThemes.Background>
      <NavBarThemes.NavBarButton>ABOUT</NavBarThemes.NavBarButton>
      <NavBarThemes.NavBarButton>RESUME</NavBarThemes.NavBarButton>
      <NavBarThemes.NavBarButton>GAMES</NavBarThemes.NavBarButton>
      <NavBarThemes.NavBarButton>VFX</NavBarThemes.NavBarButton>
      <NavBarThemes.NavBarButton>CONTACT</NavBarThemes.NavBarButton>
    </NavBarThemes.Background>
  );
}
