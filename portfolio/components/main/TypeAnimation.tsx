import { TypeAnimation } from 'react-type-animation';
 
export const Typing = () => {
  return (
<TypeAnimation
  sequence={['Leon', 5000, 'Software', 500, 'Dev', 1000]}
  style={{ fontSize: '4em', fontWeight:'bold' }}
  repeat={Infinity}
/>
  );
};