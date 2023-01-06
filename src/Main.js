import { useState } from 'react';
import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import './Main.css';

const delay = 2500;
const images = ["1.jpeg", "2.jpeg", "4.jpeg", "3.jpeg"];

function Main() {
    const [showCute, setShowCute] = useState(false)
    const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const renderText = () => {
    if(index === 0) {
        return "The place I can be forever 😌"
    } else if(index === 1) {
        return "You know I can't get enough of you?"
    } else if(index === 2) {
        return "How you so gorgeous 😭"
    }

    return "❤️💗❤️"
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
                1000,
                'I am SORRY 😢',
                1000,
                'I was way out my mind when I did what I did',
                1000,
                'Deeply regret it.',
                1000,
                'Maaf kardo plis 😭',
                1000,
                "Won't Happen Ever Again.",
                1000,
                ]}
                wrapper="a"
                repeat={Infinity}
                className='mainText'
            />
            <div style={{height:'70px'}}></div>
        </>:
        <>
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((val, index) => (
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
        <h4>{renderText()} </h4>
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