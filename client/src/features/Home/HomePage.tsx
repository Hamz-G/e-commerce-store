import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <>       <Box display='flex' justifyContent='center' sx={{ p: 4 }} >
                <Typography variant='h1'>BagStash a Hoş Geldiniz</Typography>  
                </Box>
            <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
                <div>
                    <img src="/images/hero3.jpg" alt="hero" style={{ display: 'block', width: '100%', maxHeight: 500 }} />
                </div>
            </Slider>

        </>
    )
}