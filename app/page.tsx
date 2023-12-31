//import Admin from '@/components/Dashboard/Admin'
import About from '@/components/about/About'
import Blogs from '@/components/blogs/Blogs'
import Contact from '@/components/contact/Contact'
import Main from '@/components/main/Main'
import Scroll from '@/components/scrol-icon/Scroll'
import Portfolio from '@/components/works/Portfolio'

export default function Home() {
  return (
    <div className='mt-5'>
      <Main />
      <Scroll />
      <About />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  )
}
