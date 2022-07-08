import {configureStore} from '@reduxjs/toolkit';

import cart from './slices/cartSlice/cartSlice';
import tea from './slices/teaSlice/teaSlice';

export const store = configureStore({
  reducer: {
    cart: cart,
    tea: tea,
  },
});
