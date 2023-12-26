import Main from "./adminmain/Main"
import Sidebar from "./adminsidebar/Sidebar"
import { Provider } from "react-redux"
import store from "@/redux/store"

const WelcamePage = () => {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-5 mt-20 h-screen px-32">
          <div className="sidebar">
              <Sidebar />
          </div>
          <div className="main col-span-4">
              <Main />
          </div>
      </div>
    </Provider>
  )
}

export default WelcamePage