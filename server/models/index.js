import mongoose from "mongoose";
import ReservationModel from "./reservation.model.js";
import Contact from "./contact.model.js";
import cors from "cors";
import Joi from "joi";
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import dotenv from 'dotenv';
dotenv.config();

const db = {};

db.mongoose = mongoose;
db.reservation = ReservationModel;
db.contact = Contact;

db.Joi =Joi;
db.cors=cors;
db.nodemailer=nodemailer
db.format = format;
db.fr = fr;
db.PDFDocument=PDFDocument;

db.url = process.env.DB_CONNECTION_STRING;
db.PORT = process.env.PORT || 4000; 
db.gmailUser = process.env.GMAIL_USER;
db.gmailPass = process.env.GMAIL_PASS;

export default db;