import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'https://cleanspace.onrender.com';
const token= localStorage.getItem('access_token');
console.log("Test" ,apiUrl);

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
      const response = await axios.get(`${apiUrl}/api/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const response = await axios.put(`${apiUrl}/api/contacts/${id}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      await axios.delete(`${apiUrl}/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);
