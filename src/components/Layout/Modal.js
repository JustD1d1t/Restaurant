import React, { useEffect } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.scss";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal = (props) => {
  const classes = `modal__content ${props.className}`;
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.show]);
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
      <div className="modal__background">
        <div className={classes}>
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
