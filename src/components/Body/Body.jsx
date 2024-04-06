import React from 'react'
import bannerSvg from '../../assets/banner.svg'
import './body.css'

function Body() {
    return (
        <div className='mt-4 m-2 p-2'>
            <img className='w-full banner absolute' src={bannerSvg} alt="banner" />

            <h1 style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', wordSpacing: '4px' }} className='mt-40 max-w-5xl w-full relative font-semibold leading-loose text-center text-5xl text-white header1'>Discover Exciting Events Happening <br />Near You - Stay Tuned for Updates</h1>

            <p className='mb-12 -mt-20 text-center text-white relative para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla ornare mauris ac consectetur. Ut varius neque justo, quis tincidunt felis mollis nec.</p>
        </div>
    )
}

export default Body
