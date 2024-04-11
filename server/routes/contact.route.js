import express from 'express';
import {createContact,getContacts,getContactById,updateContact,deleteContact } from "../controllers/contact.controller.js";
import { verifyToken } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', verifyToken, getContacts);
router.get('/contacts/:id',  verifyToken, getContactById);
router.put('/contacts/:id',verifyToken, updateContact);
router.delete('/contacts/:id',verifyToken, deleteContact);

export default router;
