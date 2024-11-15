import { useState, useEffect } from 'react'
import './App.css'
import LeftBar from './Components/LeftBar/LeftBar'
import RightBlock from './Components/RightBlock/RightBlock'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  



  return (
    <>

        <ToastContainer
          position="top-center"
          newestOnTop
          closeOnClick
        />
        {/* <div style={{display:"flex", width:"100vw"}}> */}
        {/* <LeftBar /> */}
        {/* </div> */}
        <RightBlock />
    </>
  )
}

export default App;
