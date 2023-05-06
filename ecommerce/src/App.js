import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Photo from "./dell.jpg";

const EcommerceApp = () => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [totalCost, setTotalCost] = useState(10);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);

  const handleAddToCart = () => {
    setShowQuantityButtons(true);
  };

  
  const handleRemoveFromCart = () => {
    setShowQuantityButtons(false);
    setSelectedAmount(1);
    setTotalCost(10);
  };

  const handleAddItem = () => {
    setSelectedAmount(selectedAmount + 1);
    setTotalCost(totalCost + 10); // Assuming each item costs $10
  };

  const handleReduceItem = () => {
    if (selectedAmount > 1) {
      setSelectedAmount(selectedAmount - 1);
      setTotalCost(totalCost - 10); // Assuming each item costs $10
    }
  };

  const price = 10; // Set the price of the product

  return (
    <div className="ecommerce-app">
      <div className="product-details">
        <div className="product-image">
          <img src={Photo} alt="Product" className="image" />
        </div>
        <div className="product-info">
          <h2>Dell XPS 15 9510</h2>
          <p className="product-description">
            This year’s Dell XPS 15 doesn’t disappoint on any of these accounts.
            It looks superb, it’s light and practical, and with 12th-gen Intel
            Core processors and optional Nvidia graphics, it’s powerful too.
          </p>
          <div className="action-section">
            {showQuantityButtons ? (
              <>
                <div className="quantity-selector">
                  <button onClick={handleReduceItem}>-</button>
                  <span>{selectedAmount}</span>
                  <button onClick={handleAddItem}>+</button>
                </div>
                <div className="selected-info">
                  <h3>Selected Amount: {selectedAmount}</h3>
                  <h3>Price: ${price}</h3>
                  <h3>Total Cost: ${totalCost}</h3>
                </div>
                <button onClick={handleRemoveFromCart}>Remove from Cart</button>
              </>
            ) : (
              <>
                <h3>Price: ${price}</h3>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceApp;
