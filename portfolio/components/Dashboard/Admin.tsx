import Blogs from './blogs/Blogs'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'

const Admin = () => {
  return (
    <div className='min-h-screen relative'>
        <NavBar />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Admin