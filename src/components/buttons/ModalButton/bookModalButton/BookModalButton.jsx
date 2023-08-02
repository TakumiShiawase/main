import React, {useState} from 'react';
import { ModalProvider, useModal } from '../../../../context/BookModalContext';


function BookModalButton(props) {

    const { openModal } = useModal();
  
    return (
        <li className='nav-item'>
        <a  onClick={openModal}><span className='icon-button'>{props.icon}</span></a>
        </li>
    );
  };

export default BookModalButton;