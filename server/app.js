import express from "express";
const app = express();
import db from "./models/index.js";
import ReservationRoutes from "./routes/reservation.route.js";
import ContactRoutes from "./routes/contact.route.js";

app.use(express.json());
app.use(cors());

app.use('/api', ReservationRoutes, ContactRoutes);

const startserver = async () =>{
    try{ 
        await db.mongoose.connect(db.url, {
            dbName : "cleanSpace"        
        });
        console.log("Connection to the database successful");
        
        app.listen(db.PORT,()=>{
            console.log("http://localhost:"+db.PORT);
        })  
    }catch(error){
        console.log(error.message);
    }
} 
startserver();
