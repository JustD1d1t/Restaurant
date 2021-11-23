import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.scss";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal = (props) => {
  const classes = `modal__background ${props.className}`;
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: null,
        enterActive: "ModalOpen",
        exit: null,
        exitActive: "ModalClosed",
        appear: null,
        appearActive: null,
      }}
    >
      <div className={classes}>
        <div className="modal__content">
          {props.children}
          <button onClick={props.closed} className="modal-close-button">
            &#x2715;
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
