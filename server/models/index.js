import mongoose from "mongoose";
import ReservationModel from "./reservation.model.js";
import Contact from "./contact.model.js";
import Admin from "./admin.model.js"
import cors from "cors";
import Joi from "joi";
import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import dotenv from 'dotenv';
dotenv.config();

const db = {};

db.mongoose = mongoose;
db.reservation = ReservationModel;
db.contact = Contact;
db.admin= Admin;

db.Joi =Joi;
db.cors=cors;
db.nodemailer=nodemailer
db.format = format;
db.fr = fr;
db.PDFDocument=PDFDocument;
db.jwt =jwt;
db.bcrypt=bcrypt;

db.url = process.env.DB_CONNECTION_STRING;
db.PORT = process.env.PORT || 4000; 
db.gmailUser = process.env.GMAIL_USER;
db.gmailPass = process.env.GMAIL_PASS;
db.secretKey= process.env.JWT_SECRET

export default db;