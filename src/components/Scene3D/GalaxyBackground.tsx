import { Stars } from '@react-three/drei';

export function GalaxyBackground() {
  return (
    <>
      <Stars
        radius={300}
        depth={60}
        count={6000}
        factor={4.5}
        saturation={0}
        fade
        speed={1.2}
      />
    </>
  );
}