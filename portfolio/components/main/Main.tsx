import Image from 'next/image';

const Main = () => {
  return (
    <div className="grid grid-cols-2 bg-cover bg-center" style={{backgroundImage: 'url("/images/back.jp")'}}>
        <div className="hero-section flex justify-center">
            <Image
            src="/images/hero-pic.png"
            alt="Description of your image"
            width={500} 
            height={200}
        />
        </div>
        <div className="name-section flex flex-col gap-5 justify-center items-center">
            <div className="name flex flex-col items-center">
                <p className='font-bold italic'>Hey, i'm</p>
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
  )
}

export default Main