import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations, addReservation, updateReservation, deleteReservation } from "./ReservationThunks.js";

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reservations.push(action.payload);
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.reservations.findIndex((reservation) => reservation.id === action.payload.id);
        if (index !== -1) {
          state.reservations[index] = action.payload;
        }
      })
      .addCase(updateReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reservations = state.reservations.filter((reservation) => reservation.id !== action.payload);
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default reservationSlice.reducer;
