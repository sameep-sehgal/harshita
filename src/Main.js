import { useState } from 'react';
import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import './Main.css';

const delay = 2500;
const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

function Main() {
    const [showCute, setShowCute] = useState(false)
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

    return <div
        className='App-header'
    >
        {!showCute? <>
            <TypeAnimation
                cursor={true}
                sequence={[
                'Heyy there!',
                2000,
                'I am SORRY 😢',
                2000,
                'I was way out my mind when I did what I did',
                2000,
                'Deeply regret it.',
                2000,
                'Maaf kardo plis 😭',
                1500,
                "Won't Happen Ever Again.",
                2000,
                ]}
                wrapper="a"
                repeat={1}
                className='mainText'
            />
            <div style={{height:'100px'}}></div>
        </>:
        <>
        {/* <div
            style={{maxHeight: '500px', maxWidth:'500px'}}
        > */}
        {/* <ImageSlider effectDelay={500} autoPlayDelay={500}>
            <Slide>
                <img alt="img1" src="1.jpeg"/>
            </Slide>
            <Slide>
                <img alt="img2" src="2.jpeg"/>
            </Slide>
            <Slide>
                <img alt="img3" src="3.jpeg"/>
            </Slide>
        </ImageSlider> */}
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((val, index) => (
        //   <div
        //     className="slide"
        //     key={index}
        //     style={{ backgroundColor }}
        //   ></div>
          <img className="slide"
            key={index} alt="img3" src={val}/>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>

        <h4>Wish we could turn back time to the good old days </h4>
        {/* </div> */}
        </>}
        <button
            className = 'button'
            onClick={() => {setShowCute(!showCute)}}
        >
            {showCute? 'Back To MaafiNama' : 'On to Some Cute Stuff'}
        </button>
    </div>
}

export default Main;