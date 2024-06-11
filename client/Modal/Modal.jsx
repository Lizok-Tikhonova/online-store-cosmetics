
import styles from "./Modal.module.css";
import React, { useRef, useEffect } from 'react';

const Modal = ({active, setActive, children}) => {

	return (
        <div className={active? styles.active: styles.modal} onClick={()=> setActive(false)}>
            <div className={styles.modalContent} onClick={e=> e.stopPropagation()}>
                {children}
            </div>
        </div>
	);
};

export default Modal;