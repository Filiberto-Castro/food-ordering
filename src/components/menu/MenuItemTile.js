import React from "react";
import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-white p-4 rounded-lg text-center group hover:bg-primary shadow-md shadow-black/25 hover:-translate-y-5 transition ease-in cart">
      <div className="text-center">
        <img
          src={image}
          className="max-h-24 block mx-auto group-hover:-translate-y-5 group-hover:scale-[1.5] transition ease-in"
          alt="pizza"
        />
      </div>
      <h4 className="dark:text-white font-semibold text-xl my-3 group-hover:text-white transition ease-in">
        {name}
      </h4>
      <p className="text-gray-500 group-hover:text-gray-100 text-sm line-clamp-3 transition ease-in">
        {description}
      </p>
      <AddToCartButton
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
        image={image}
      />
    </div>
  );
}
