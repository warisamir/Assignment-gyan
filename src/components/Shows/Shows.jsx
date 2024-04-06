import React, { useEffect, useState, useRef } from 'react';
import rightArrowWhiteSvg from '../../assets/right-arrow-white.svg';
import locationWhiteSvg from '../../assets/location-white.svg';
import './shows.css'

function Shows() {
    const [shows, setShows] = useState([]);

    const converturl = (url) => {
        const id = url.match(/\/d\/([-\w]+)/)[1];
        const imgId = `https://drive.google.com/thumbnail?id=${id}`;
        return imgId;
    };

    const convertWeather = (weather) => {
        weather = weather.replace(/(\d+)/, "$1°");
        weather = weather.replace(/\s/, ", ");
        return weather;
    };

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const fetchData = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
            const data = await response.json();
            console.log(data);
            setShows(data.events);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    

    return (
        <div className='flex ml-24 z-10 flex-nowrap'>
            <div className='flex space-x-2 relative'>
                <h1 className='font-semibold text-lg ml-36 text-white'>Recommended Shows</h1>
                <img className='w-5' src={rightArrowWhiteSvg} alt="rightArrow" />
            </div>
            <div className="flex">
                {shows.map((show, index) => (
                    <div key={index}>
                        <div>
                            <img className='max-w-sm w-60 ml-20 -mt-40 object-cover rounded-lg' src={converturl(show.imgUrl)} alt="showImage" />
                        </div>
                        <div className='flex -mt-28 px-3 items-center max-w-sm w-full justify-between'>
                            <p className='text-[14px] px-6 ml-16 text-white'>{show.eventName}</p>
                            <p className='text-[9px] text-white mt-1'>{formatDate(show.date)}</p>
                        </div>
                        <div className='flex px-6 items-center mt-2 max-w-sm w-full justify-between'>
                            <p className='text-[9px] px-6 ml-14 text-white'>{show.cityName}</p>
                            <p className='text-[9px] text-white'>{convertWeather(show.weather)} | {Math.floor(show.distanceKm / 100)} Km</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shows;
