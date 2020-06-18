import React from 'react';
import { MdClose } from 'react-icons/md';
import './styles.scss';

// // // //
interface Props {
  closeOverlay?(): void;
}

export const Overlay: React.FC<Props> = ({ closeOverlay }) => {
  return (
    <div className="row overlay" onMouseLeave={closeOverlay}>
      <div className="col-lg-12 text-center">
        <div className="overlay-nav">
          <p className="lead mb-0">Oz Extension</p>

          <MdClose size={25} onClick={closeOverlay} />
        </div>
        <img className="overlay-image" src="https://via.placeholder.com/100"></img>
        <p className="overlay-header">Do you have enough info to buy?</p>
        <p className="overlay-description">
          Currently, this product is owned by Ferroro Rocher Spa. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <a href="" className="overlay-button">
          View Product Info
        </a>
      </div>
    </div>
  );
};
