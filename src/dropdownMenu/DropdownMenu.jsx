import React, {useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as LeftIcon } from '../img/left.svg';
import { ReactComponent as RightIcon } from '../img/right.svg';
import FontChangerButtons from '../components/buttons/FontChangeButtons/FontChangeButtons';
import FontSizeControl from '../components/buttons/FontSizeControl/FontSizeControl';
import ColorSlider from '../components/buttons/ColorSlider/ColorSlider';
import LineHeight from '../components/buttons/LineHeigt/LineHeight';


function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null)
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href='#' className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{ props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{ props.rightIcon}</span>
        </a>
      );
    }
    
    
    return (
      <div className="dropdown" style = {{ height: menuHeight }} ref={dropdownRef}>
          <CSSTransition 
          in={activeMenu === 'main'} 
          unmountOnExit 
          timeout={500}
          classNames='menu-primary'
          onEnter={calcHeight}
          >
          <div className="menu">
            <DropdownItem>
              My Profile
            </DropdownItem>
            <FontSizeControl/>
            <DropdownItem 
            goToMenu='settings'
            rightIcon={<RightIcon />}>
              Fonts
            </DropdownItem>
            <LineHeight />
            <ColorSlider />
          </div>
          </CSSTransition>
  
          <CSSTransition 
          in={activeMenu === 'settings'} 
          unmountOnExit 
          timeout={500}
          classNames='menu-secondary'
          onEnter={calcHeight}
          >
          <div className="menu">
            <DropdownItem goToMenu='main' leftIcon={<LeftIcon/>}></DropdownItem>
            <FontChangerButtons/>
    
  
          </div>
          </CSSTransition>
      </div>
    );
  };

  export default DropdownMenu;