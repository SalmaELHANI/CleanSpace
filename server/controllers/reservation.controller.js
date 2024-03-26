import db from "../models/index.js";
import sendEmail from '../services/emailService.js';
import generatePDFContent from '../services/pdfGenerator.js';
import fs from 'fs';

const Joi = db.Joi;
const querySchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    phone: Joi.string().required().min(10),
    city: Joi.string().required(),
    service: Joi.string().required(),
    residenceType: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    message:Joi.string()
});

export const createReservation = async (req, res) => {
    try {
        const { error } = querySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const reservation = await db.reservation.create(req.body);
        const pdfDoc = generatePDFContent(reservation);
        const pdfPath = 'reservation.pdf';
        pdfDoc.pipe(fs.createWriteStream(pdfPath));
        pdfDoc.end();
        
        const message = `Cher(e) ${reservation.name},\n\nNous avons bien reçu votre réservation chez CleanSpace ! Veuillez trouver ci-joint le PDF de confirmation de votre rendez-vous, contenant tous les détails nécessaires.\n\nCordialement,\nL'équipe CleanSpace`;

        await sendEmail(reservation.email, 'Confirmation de réservation', message, pdfPath);

        res.status(201).json({
            status: 'success',
            data: {
                reservation
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

export const getAllReservations = async (req, res) => {
    try {
        const reservations = await db.reservation.find();

        const formattedReservations = reservations.map(reservation => ({
            ...reservation.toObject(),
            date: db.format(reservation.date, 'yyyy-MM-dd'),
        }));

        res.status(200).json({
            status: 'success',
            results: reservations.length,
            data: {
                reservations: formattedReservations,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

export const updateReservation = async (req, res) => {
    try {
        const reservation = await db.reservation.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!reservation) {
            return res.status(404).json({
                status: 'fail',
                message: 'Reservation not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                reservation
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

export const deleteReservation = async (req, res) => {
    try {
        const reservation = await db.reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({
                status: 'fail',
                message: 'Reservation not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
