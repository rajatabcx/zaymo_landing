import { Hero } from '../components/Hero';
import { NavBar } from '../components/NavBar';
import { StickyCursor } from '../components/StickyCursor';

export function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <StickyCursor />
    </>
  );
}
