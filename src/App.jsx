// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Dashboard from '../src/components/dashboard'
// import Home from '../src/components/home'
// import Login from '../src/components/login'
// import Register from '../src/components/register'
// import Profile from '../src/components/profile'
// import Materi from '../src/components/materi'
import { RouterProvider } from "react-router-dom";
import route from "./Routes/index"
import './App.css'

const App = () => {


  return (
    <>
    <RouterProvider router={route}/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        
      </Routes>
    </Router> */}
     
     
    </>
  )
}

export default App
