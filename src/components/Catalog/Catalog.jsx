import React, { useState, useEffect } from 'react';
import locationSvg from '../../assets/location.svg';

function Catalog() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`${isMobile ? 'mx-4' : 'mx-24'} px-2 max-w-4xl`}>

            {isMobile ? (
                <div>
                    <ul className='flex justify-around space-x-5 overflow-x-auto'>
                        <li className='cursor-pointer text-nowrap'>Live Shows</li>
                        <li className='cursor-pointer'>Streams</li>
                        <li className='cursor-pointer'>Movies</li>
                        <li className='cursor-pointer'>Plays</li>
                        <li className='cursor-pointer'>Events</li>
                        <li className='cursor-pointer'>Sports</li>
                        <li className='cursor-pointer'>Activities</li>
                    </ul>

                </div>
            ) : (
                <div className='flex justify-between'>
                    <div className='flex space-x-1'>
                        <img className='w-3' src={locationSvg} alt="location" />
                        <p>Mumbai, India</p>
                    </div>
                    <div className='max-w-lg w-full'>
                        <ul className='flex justify-around space-x-5 ml-4 overflow-x-auto'>
                            <li className='cursor-pointer'>Live Shows</li>
                            <li className='cursor-pointer'>Streams</li>
                            <li className='cursor-pointer'>Movies</li>
                            <li className='cursor-pointer'>Plays</li>
                            <li className='cursor-pointer'>Events</li>
                            <li className='cursor-pointer'>Sports</li>
                            <li className='cursor-pointer'>Activities</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>

    );
}

export default Catalog;
