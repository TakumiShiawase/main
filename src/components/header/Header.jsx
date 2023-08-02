import React, {useState} from 'react';
import Navbar from '../navbar/Navbar';
import NavItem from '../navItem/NavItem';
import DropdownMenu from "../../dropdownMenu/DropdownMenu";
import { ReactComponent as Ololo} from "../../img/ololo.svg";
import FullscreenButton from '../buttons/FullscreenButton/FullscreenButton';
import SplitButton from "../buttons/splitButton/SplitButton";
import { ModalProvider, useModal } from '../../context/BookModalContext';
import BookModalButton from '../buttons/ModalButton/bookModalButton/BookModalButton';


function Header(props) {
    const { openModal } = useModal();

    return (
        <ModalProvider>
        <div className="slide-up">
        <Navbar>
            <li className='nav-item'>
                <a onClick={openModal}><span className='icon-button'><Ololo/></span></a>
            </li>
          <SplitButton icon={<Ololo />} />
          <FullscreenButton icon={<Ololo />} />
          <NavItem icon={<Ololo />}>
            <DropdownMenu icon={<Ololo />} />
          </NavItem>
        </Navbar>
        </div> 
        </ModalProvider>
    );
  };


  export default Header;