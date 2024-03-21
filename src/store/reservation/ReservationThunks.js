import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
      try {
        const response = await axios.get('/api/reservations');
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );
  

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData) => {
    try {
      const response = await axios.post('/api/reservations', reservationData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateReservation = createAsyncThunk(
  'reservations/updateReservation',
  async ({ id, reservationData }) => {
    try {
      const response = await axios.put(`/api/reservations/${id}`, reservationData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id) => {
    try {
      await axios.delete(`/api/reservations/${id}`);
      return id;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
