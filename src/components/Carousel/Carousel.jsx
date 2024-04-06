import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rightArrowWhiteSvg from '../../assets/right-arrow-white.svg';
import './carousel.css'

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                },
            },
        ],
    };
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
        <div className='ml-24 relative z-10 space-x-2'>
            <div className='flex absolute shows'>
                <h1 className='font-semibold text-lg ml-36 mt-12 text-white header'>Recommended Shows</h1>
                <img className='w-5 mt-12 img' src={rightArrowWhiteSvg} alt="rightArrow" />
            </div>
            <Slider {...settings}>
                {shows.map((show, index) => (
                    <div className='slide-item' key={index}>
                        <div className='space-x-16 ml-12 mb-12'>
                            <img className='max-w-md w-full ml-28 mt-32 object-cover rounded-lg image' src={converturl(show.imgUrl)} alt="showImage" />
                            <div className='flex -mt-28 items-center w-full justify-between space-x-14'>
                                <p className='text-[14px] ml-16 text-white px-1 event-name'>{show.eventName}</p>
                                <p className='text-[9px] text-white mt-1 event-date'>{formatDate(show.date)}</p>
                            </div>
                            <div className='flex items-center mt-2 max-w-sm w-full justify-between info'>
                                <p className='text-[9px] px-4 ml-14 text-white'>{show.cityName}</p>
                                <p className='text-[9px] text-white weather'>{convertWeather(show.weather)} | {Math.floor(show.distanceKm / 100)} Km</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
