import Main from "./adminmain/Main"
import Sidebar from "./adminsidebar/Sidebar"
import Topbar from "./admintopbar/Topbar"

const WelcamePage = () => {
  return (
    <div className="grid grid-cols-5 mt-20 h-screen px-32">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="main col-span-4">
            <Main />
        </div>
    </div>
  )
}

export default WelcamePage