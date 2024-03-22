import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from "./reservation/ReservationSlice.js";

const store = configureStore({
  reducer: {
    
    reservation: reservationReducer,
  },
});

export default store;
