import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((p) => p.id === product.id);
      if (!exists) state.items.push(product);
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((p) => p.id !== id);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
