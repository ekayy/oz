import React, { FunctionComponent } from 'react';
import './styles.scss';

// // // //

export const Product: FunctionComponent = () => {
  return (
    <div className="product-container">
      <div className="product-info">
        <img src="https://via.placeholder.com/120" />
        <p>Product Title Nice</p>
        <div className="rating">
          <img src="https://via.placeholder.com/80x15" />
        </div>
        <span className="line" />
        <div className="price">
          <span>$18.94</span>
          <span className="price-unit">($3.21 / unit)</span>
        </div>
      </div>
    </div>
  );
};
