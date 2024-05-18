import React from "react";
import FlyingButton from "react-flying-item";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <button type="button" onClick={onClick}>
          <span>Add to cart ${basePrice}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flying-button-parent mt-4">
      <button type="button" onClick={onClick}>
        <span>Add to cart (from ${basePrice})</span>
      </button>
    </div>
  );
}
