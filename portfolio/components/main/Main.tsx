import Image from 'next/image';
import styles from './Main.module.css';


const Main = () => {

  return (
    <div className={`pt-6 lg:pt-32 lg:flex lg:justify-between lg:gap-4 lg:px-32`} style={{backgroundImage: 'url("/images/back.jp")'}} id="home">
      {/* Object with red background */}
      <div className="absolute inset-0 z-[-1]"></div>

      {/* Existing content */}
      {/* rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] */}
      <div className={`hero-section flex justify-center xl:rounded-full xl:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] `} style={{}}>
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
          <h1 className={` ${styles.bounce} text-8xl font-extrabold`}>Leon</h1>
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
