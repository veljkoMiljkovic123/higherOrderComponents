import { Outlet } from 'react-router-dom'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useFetch from './hooks/useFetch';

axios.defaults.baseURL='https://dummyjson.com'
function App() {



  return (
    <div>
      <NavbarComponent />

      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
