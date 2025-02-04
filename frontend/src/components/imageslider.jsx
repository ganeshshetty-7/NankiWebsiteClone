import React, { useState, useEffect } from 'react';

const images = [
    { src: 'src/assets/bg1.webp' },
    { src: 'src/assets/bg2.webp' },
    { src: 'src/assets/bg3.webp' },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true); // Start transition
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTransition(false); // End transition
            }, 200); // Shorter duration for the transition effect
        }, 2500); // Change image every 2.5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleImageClick = () => {
        console.log(`Image ${currentIndex + 1} clicked`);
    };

    return (
        <div style={{ width: '100%', height: '1185px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <img
                src={images[currentIndex].src}
                alt="Slider"
                style={{
                    width: '100%',
                    height: '150%',
                    objectFit: 'cover',
                    cursor:'default',
                    transition: 'transform 0.9s ease', // Shortened transition duration
                    transform: transition ? 'translateX(-100%)' : 'translateX(0)', // Slide out effect
                }}
                onClick={handleImageClick}
            />
            <div style={{ 
                position: 'absolute', 
                bottom: '10px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                display: 'flex', 
                justifyContent: 'center' ,
                
            }}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick()}
                        style={{
                            width: '40px',
                            height: '3px',
                            backgroundColor: index === currentIndex ? 'white' : 'grey',
                            margin: '0 5px',
                            cursor:'default',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
