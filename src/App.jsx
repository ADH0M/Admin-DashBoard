import { Outlet } from "react-router-dom"
import Aside from "./components/AsideNav/Aside"
import { Provider } from "react-redux"
import store from "./stores/store"

function App() {


  return (
    <>
    <Provider store={store}>

      <div className="flex h-screen bg-[#3a2e81] text-gray-100 overflow-hidden">
        {/* {backgournd overlay} */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-[#3a2e81] to-gray-900 opacity-50 ' />
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
