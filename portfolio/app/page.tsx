import About from '@/components/about/About'
import Blogs from '@/components/blogs/Blogs'
import Main from '@/components/main/Main'
import Scroll from '@/components/scrol-icon/Scroll'
import Portfolio from '@/components/works/Portfolio'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mt-5'>
      <Main />
      <Scroll />
      <About />
      <Portfolio />
      <Blogs />
    </div>
  )
}
