import React from 'react';
import Slider from 'react-slick';

//components
import Poster from '../Poster/Poster.component';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config';

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;
  return (
    <>
        <div className='flex flex-col items-start my-2'>
            <h3 className={`text-xl font-bold my-2 ${props.isDark ? 'text-white' : 'text-gray-700'}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ? 'text-white' : 'text-gray-700'}`}>{props.subtitle}</p>
        </div>
        <Slider {...sliderConfig}>
            {
                props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))
            }
        </Slider>
    </>
  )
}

export default PosterSlider;