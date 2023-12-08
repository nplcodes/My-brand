import Image from 'next/image';
import styles from './Main.module.css'; // Import the styles file (assuming you're using CSS modules)

const Main = () => {
  return (
    <div className={`relative grid grid-cols-2 bg-cover bg-center pt-16`} style={{backgroundImage: 'url("/images/back.jp")'}} id="home">
      {/* Object with red background */}
      <div className="absolute inset-0 z-[-1]"></div>

      {/* Existing content */}
      <div className={`hero-section flex justify-center rounded-full ${styles.bounce} shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`} style={{}}>
        <Image
          src="/images/hero-pic.png"
          alt="Description of your image"
          width={500} 
          height={200}
        />
      </div>
      <div className="name-section flex flex-col gap-5 justify-center items-center">
        <div className="name flex flex-col items-center">
          <p className='font-bold italic'>Hey, I'm</p>
          <h1 className='text-8xl font-extrabold'>Leon</h1>
        </div>
        <div className="hero-text">
          <ul className="flex gap-2 items-center">
            <span className='text-xs text-[#679EF7] '>UI/Ux Design</span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className='text-xs text-[#679EF7]'>Mob App Developer</span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className='text-xs text-[#679EF7]'>Web Developer</span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
