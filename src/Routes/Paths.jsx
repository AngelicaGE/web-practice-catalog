import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Parallax from '../ParallaxAnimation/Parallax'
import LandingPage from '../Components/LandingPage'

const Paths = () => {
  return (
    <div className='Paths'>
        <BrowserRouter>
            <Routes>
                <Route path="/Parallax" element={<Parallax></Parallax>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
                <Route path="/" element={<LandingPage/>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
                {/* <Route path="/" element={c} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   " */}
                {/*<Route path="*" element={<ErrorPage></ErrorPage>} ></Route> */} 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Paths