import React, {useState} from 'react';
import Header from '../components/header/Header';
import Book from '../components/book/Book';
import { useColorContext } from '../context/ColorContext';
import { ReactComponent as Ololo } from '../img/ololo.svg';
import { ModalProvider, useModal } from '../context/BookModalContext';
import BookModal from '../components/modals/bookModal/BookModal';

function Reader() {

    const { colors } = useColorContext();
    const { isModalOpen, closeModal } = useModal();

    return (
            <div className='back' style={{ backgroundColor: colors.backgroundColor, color: colors.fontColor }}  >
              <div className="reader">
                  <div className="container">
                    <div>
                      <Headerdown icon={<Ololo/>} />
                    </div>
                    <div className="reader__book">
                      <BookModal isOpen={isModalOpen} onClose={closeModal}>
                        <div className='modal-links'>
                              <h2 className='modal-h2'>Содержание</h2>
                              <a href='#' className='modal-a'>
                                Глава 1 <span className='modal-span'>Путь в бездну</span>
                              </a>
                              <a href='#' className='modal-a'>
                                Глава 2 <span className='modal-span'>Выход из бездны</span>
                              </a>
                              <a href='#' className='modal-a'>
                                Глава 3 <span className='modal-span'>И снова безндна</span>
                              </a>
                              <a href='#' className='modal-a'>
                                Глава 4 <span className='modal-span'>Туда и обратно</span>
                              </a>
                              <a href='#' className='modal-a'>
                                Глава 5 <span className='modal-span'>Торонто в бездне</span>
                              </a>
                              <a href='#' className='modal-a'>
                                Глава 6 <span className='modal-span'>Бездна сама пришла</span>
                              </a>
                              </div>
                      </BookModal>
                      <Book />
                    </div>
                  </div>
                </div>
                </div>
    );
  }

  const Headerdown = (props) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const toggleHeader = () => {
      setIsHeaderVisible((prevIsHeaderVisible) => !prevIsHeaderVisible);
    };
  
    return (
      <div>
        {isHeaderVisible && <Header />} 
        <li className="nav-item">
          <a onClick={toggleHeader}>
            {isHeaderVisible}{props.icon}
          </a>
        </li>
      </div>
    );
  };

export default Reader;