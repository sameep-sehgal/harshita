import { useState } from 'react';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:'#FC8EAC',
      color:'#ffffff',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
  };


function NonMain({setShowMain}) {
    const [value, setValue] = useState('');
    const [idx, setIdx] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    const questions = [
        ["On which date of December I gave you the letter?", "20"],
        ["Which number did you miss when you gave me your phone number?", "8"],
        ["Good Going! \n Which show did you suggest me to watch? (Which I obviously didn't)", "white lotus"],
        ["Final Question. \n Do you like me?", "yes"],
      ]

    function closeModal() {
        setIsOpen(false);
    }

    const renderQuestion = () => {
        if(idx === questions.length) {
            return "";
        }
        return questions[idx][0];
    }

    const renderButton = () => {
        if(idx === questions.length) {
            return (
                <button 
                    className = 'button'
                    onClick={() => {
                        setShowMain(true);
                    }}>
                    Harshita Identified, Enter!
                </button>
            )
        } 
        return (
            <button
                className = 'button'
                onClick={() => {
                    if(value.toLowerCase() === questions[idx][1]) {
                        setIdx(idx+1);
                        setValue("");
                    } else {
                        openModal();
                    }
                    
            }}
            >Next</button>
        )
    }

    return <>
            <p>
                Only Harshita Allowed Inside. To Sawaal ka Jawaab Dein.
            </p>
            <h6>{renderQuestion()}</h6>
            {idx !== questions.length? <input value={value} onChange={(event) => setValue(event.target.value)}/>:<></>}
            {renderButton()}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Nope Babe! You're Wrong!!!</h2>
                <button className="button" onClick={closeModal}>close</button>
            </Modal>
    </>
}

export default NonMain;