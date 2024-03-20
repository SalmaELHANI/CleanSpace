import express from 'express';
import { createReservation,getAllReservations,updateReservation,deleteReservation } from  "../controllers/reservation.controller.js";

const router = express.Router();

router.post('/reservations', createReservation);
router.get('/reservations', getAllReservations);
router.put('/reservations/:id', updateReservation);
router.delete('/reservations/:id', deleteReservation);

export default router;
