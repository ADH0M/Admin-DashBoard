import { Outlet } from "react-router-dom"
import Aside from "./components/AsideNav/Aside"
import { Provider } from "react-redux"
import store from "./stores/store"

function App() {


  return (
    <>
    <Provider store={store}>

      <div className="flex h-screen bg-[#bbf7d093] bg-opacity-50 dark:bg-[#3a2e81] dark:text-gray-100 overflow-hidden">
        {/* {backgournd overlay} */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br dark:from-gray-900 dark:via-[#3a2e81] dark:to-gray-900 opacity-50 ' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>

        <Aside/>

        <Outlet/>

      </div>
    </Provider>


    </>
  )
}

export default App
