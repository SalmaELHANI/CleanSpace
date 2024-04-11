import express from 'express';
import { createReservation,getAllReservations,updateReservation,deleteReservation } from  "../controllers/reservation.controller.js";
import { verifyToken } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/reservations', createReservation);
router.get('/reservations',verifyToken, getAllReservations);
router.put('/reservations/:id',verifyToken, updateReservation);
router.delete('/reservations/:id',verifyToken, deleteReservation);

export default router;
