import { createSlice, current } from "@reduxjs/toolkit";
import products from "../products.json";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    money: 100000000000,
    total: 0,
  },
  reducers: {
    sell: (state, action) => {
      if (state.money < 100000000000) {
        const product = state.items.find((f) => f.id === action.payload);
        product.count = Number(product.count) - 1;
        state.money += Number(product.productPrice);
      }
    },
    buy: (state, action) => {
      //current kullanarak çözdük proxy hatasını
      const product = state.items.find((f) => f.id === action.payload);
      product.count = Number(product.count) + 1;
      state.money -= product.productPrice;
      state.total += Number(product.productPrice);
    },
    buyPayload: (state, action) => {
      const { p, count } = action.payload;
      const item = state.items.find((f) => f.id === p.id);
      //gece 3:33 :D
      state.money -= Number(p.productPrice) * Number(count - p.count);
      item.count = Number(count);
    },
  },
});

export const { sell, buy, buyPayload } = productSlice.actions;
export const moneySelector = (state) => state.products.money;
export const totalSelector = (state) => state.products.total;

export const producstSelector = (state) => state.products.items;

export default productSlice.reducer;
