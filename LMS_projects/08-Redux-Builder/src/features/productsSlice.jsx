import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "iPhone 14",
    price: 79999,
    category: "Electronics",
    rating: 4.8,
    image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN_e4ec8714-4f10-42a3-8655-71304a9c6866.jpg?v=1759733978&width=1445"
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: 5999,
    category: "Footwear",
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtTJC4wSQbIImA9iJnJDB9dWltp6dtY1utg&s"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    category: "Electronics",
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCKVW5NgPbSn6kyu_tM0913oiUn5KkMfKeg&s"
  }
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;