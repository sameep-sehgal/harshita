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
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <>
    <p>
                Only Harshita Allowed Inside. To Sawaal ka Jawaab Dein.
            </p>
            <h6>What is Sameep's</h6>
            <input value={value} onChange={(event) => setValue(event.target.value)}/>
            <button 
            className = 'button'
            onClick={() => {
                if(value.toLowerCase() === 'ss') {
                    setShowMain(true);
                } else {
                    openModal();
                }
                
            }}>
                Enter
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
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