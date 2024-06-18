import React, { useState } from 'react'

function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log('main data', slides[currentIndex].url, 'index:', currentIndex);

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover"
    }

    const sliderStyles = {
        height: "100%",
        position: "relative",


    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        left: '32px',
        fontSize: '45px',
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: "translate(0, -50%)",
        right: '32px',
        fontSize: '45px',
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    console.log(slides.length);

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const dotStyles = {
        margin: '0 8px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 600


    }

    const goPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        console.log(newIndex);
        setCurrentIndex(newIndex);

    }
    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log(newIndex);

    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)

    }
    return (
        <div style={sliderStyles}>

            <div style={leftArrowStyles} onClick={goPrevious}>❰</div>
            <div style={rightArrowStyles} onClick={goNext}>❱</div>
            <div style={slideStyles}>


            </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>{slide.title}</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider