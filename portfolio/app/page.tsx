import About from '@/components/about/About'
import Main from '@/components/main/Main'
import Scroll from '@/components/scrol-icon/Scroll'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Main />
      <Scroll />
      <About />
    </div>
  )
}
