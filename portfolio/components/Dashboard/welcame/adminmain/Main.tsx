import Blogs from '../../blogs/Blogs'
import Topbar from '../admintopbar/Topbar'
import Gallery from './gallery/Gallery'
import Works from './works/Works'
import Home from './home/Home'
import Account from './account/Settings'
import NewBlogs from './Forms/NewBlogs'
import NewSkill from './Forms/NewSkill'
import NewWork from './Forms/NewMyWork'
import NewGallery from './Forms/NewGallery'
import Skills from './skills/Skills'
import { useDispatch, useSelector } from 'react-redux';
import Messages from './messages/Messages'


interface RootState {
  selectedComponent: { selected: String };
}


const Main = () => {
  const selectedComponent = useSelector((state: RootState) => state.selectedComponent.selected);
  const dispatch = useDispatch();

  console.log(selectedComponent)

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Blogs':
        return <Blogs />;
      case 'Works':
        return <Works />;
      case 'Gallery':
        return <Gallery />;
      case 'Home':
        return <Home />;
      case 'Account':
        return <Account />;
      case 'NewBlogs':
        return <NewBlogs />;
      case 'NewSkill':
        return <NewSkill />;
      case 'NewWork':
        return <NewWork />;
      case 'Messages':
          return <Messages />;
      case 'NewGallery':
        return <NewGallery />;
      case 'Skills':
        return <Skills />;
      default:
        return null;
    }
  };


  return (
    <div className='border h-screen relative'>
        <div className='py-10 border px-1 fixed w-[68%] flex flex-col gap-5 z-100 bg-gray-300'>
          <p className='font-bold'>NPL Codes Ltd</p>
        </div>
        <div className="content z-0 mt-32">
          {renderSelectedComponent()}
        </div>
    </div>
  )
}

export default Main