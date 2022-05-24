import React from 'react'
import './Parallax.css'
import skyImg from './imgs/Sky.png'
import starsImg from './imgs/Stars.png'
import smokeImg from './imgs/Smoke.png'
import rocketImg from './imgs/Rocket.png' 

const ParallaxRocket = () => {
  return (
    <div id='ParallaxRocket'>
        <div className='parallax-container'>

            <div className='img-container one'>
                <img className='image' src={skyImg} alt="sky" />
            </div>

            <div className='img-container two'>
                <img  id="star"className='image1' src={starsImg} alt="stars" />
                <img className='image2' src={starsImg} alt="stars" />
            </div>

            <div className='img-container three'>
                <img className='image ' src={smokeImg} alt="smoke" />
            </div>

            <div className='img-container four'>
                <img className='image ' src={rocketImg} alt="rocket" />
            </div>

        </div>
    </div>
  )
}

export default ParallaxRocket