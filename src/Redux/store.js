// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import watchlistReducer from "./watchlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
