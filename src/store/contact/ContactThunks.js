import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const apiUrl = process.env.API_URL || 'http://localhost:3000';

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contactData) => {
    try {
      const response = await axios.post(`${apiUrl}/api/contacts`, contactData);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/contacts');
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contactData }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3000//api/contacts/${id}`);
      return id;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);
