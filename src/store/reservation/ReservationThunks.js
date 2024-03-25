import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = process.env.API_URL || 'http://localhost:3000';

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/reservations`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData) => {
    try {
      const response = await axios.post(`${apiUrl}/api/reservations`, reservationData);
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReservation = createAsyncThunk(
  'reservations/updateReservation',
  async ({ id, reservationData }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/reservations/${id}`, reservationData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/reservations/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
