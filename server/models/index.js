import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const db = {};

db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION_STRING;
db.PORT = process.env.PORT || 4000; 
db.cors=cors;


export default db;