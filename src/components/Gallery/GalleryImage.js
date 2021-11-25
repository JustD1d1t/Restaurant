import classes from "./GalleryImage.module.scss";
import React, { useState, useRef } from "react";

import Modal from "../Layout/Modal";
// import Backdrop from "../Layout/Backdrop";
const GalleryImage = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <Modal
        show={modalIsOpen}
        closed={closeModal}
        className={classes["modal"]}
      >
        <div className={classes["modal-image__container"]}>
          <img src={props.image2} alt="" />
        </div>
      </Modal>
      <div className={classes["gallery-image"]} onClick={showModal}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default GalleryImage;
