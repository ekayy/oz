import React, { FunctionComponent } from 'react';
import { MdClose } from 'react-icons/md';
import './styles.scss';

// // // //

export const Overlay: FunctionComponent = () => {
  return (
    <div className="row overlay">
      <div className="col-lg-12 text-center">
        <div className="overlay-nav">
          <p className="lead mb-0">Oz Extension</p>
          <MdClose size={25} />
        </div>
        <img className="overlay-image" src="https://via.placeholder.com/270"></img>
        <p className="overlay-header">Do you have enough info to buy?</p>
        <p className="overlay-description">
          Currently, this product is owned by Ferroro Rocher Spa. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="" className="overlay-button">
          View Product Info
        </a>
      </div>
    </div>
  );
};
