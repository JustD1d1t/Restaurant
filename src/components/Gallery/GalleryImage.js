import classes from "./GalleryImage.module.scss";
import React, { useState } from "react";

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
      <Modal show={modalIsOpen} closed={closeModal}>
        <img src={props.image} alt="" />
      </Modal>
      {/* {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null} */}
      <div className={classes["gallery-image"]} onClick={showModal}>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default GalleryImage;
