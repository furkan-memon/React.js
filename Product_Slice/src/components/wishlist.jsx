import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  console.log(wishlist);

  
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Wishlist</h2>
        <button
          className="inline-flex items-center bg-brand hover:bg-brand-strong text-white px-3 py-2 rounded"
          onClick={() => dispatch(clearWishlist())}
        >
          Clear Wishlist
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishlist.length === 0 && <p>No items in wishlist.</p>}
        {wishlist.map((p) => (
          <div key={p.id} className="p-4 border rounded">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-contain mb-2"
            />
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm">${p.price}</div>
              </div>
              <div className="flex gap-4 items-end">
                <button
                  className=" items-center border border-gray-700 py-2 px-1 cursor-pointer text-fg-danger text-sm"
                  onClick={() => {
                    dispatch(addToCart(p))
                    dispatch(removeFromWishlist(p.id))
                  }}
                >
                  Add to Cart
                </button>
                <button
                                  className=" items-center border border-gray-700 py-2 px-1 cursor-pointer text-fg-danger text-sm"

                  onClick={() => dispatch(removeFromWishlist(p.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
