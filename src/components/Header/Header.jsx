import React, { useState, useEffect } from 'react';
import barsSvg from '../../assets/bars.svg';
import searchSvg from '../../assets/search.svg';
import heartsSvg from '../../assets/hearts.svg';
import userSvg from '../../assets/user.svg';
import locationSvg from '../../assets/location.svg';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='m-2 p-2 flex justify-around items-center'>
            {isMobile ? (
                // Mobile header layout
                <div className="flex justify-between w-full px-2">
                    <div className='flex flex-col space-x-2'>
                        <h1 className='text-xl font-bold text-red-600'>BookUsNow</h1>
                        <div className='flex space-x-2'>
                            <img className='w-3' src={locationSvg} alt="location" />
                            <p>Mumbai,India</p>
                        </div>

                    </div>

                    <div className='flex space-x-4'>
                        <img className='w-5' src={searchSvg} alt="search" />
                        <img className='w-5' src={heartsSvg} alt="heart" />
                        <img className='w-5' src={userSvg} alt="user" />
                    </div>

                </div>
            ) : (
                // Default header layout for larger screens
                <>
                    <div>
                        <h1 className='text-xl font-bold text-red-600'>BookUsNow</h1>
                    </div>
                    <div className='flex max-w-2xl w-full'>
                        <div className='flex'>
                            <button className='bg-gray-800 text-white rounded-md px-3 py-1 flex items-center'>
                                <span>
                                    <img className='w-4 mr-2' src={barsSvg} alt="bars" />
                                </span>
                                Categories
                            </button>
                        </div>
                        <div className='mx-2 w-full max-w-lg'>
                            <input className='border border-gray-300 px-4 py-1 rounded-md w-full' type="text" placeholder='Search' />
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2 items-center'>
                            <img className='w-5' src={heartsSvg} alt="heart" />
                            <button>Favourites</button>
                        </div>
                        <button className='border border-gray-300 px-2 py-1 rounded-md'>Sign in</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;
