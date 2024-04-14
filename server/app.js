import express from "express";
const app = express();
import db from "./models/index.js";
import ReservationRoutes from "./routes/reservation.route.js";
import ContactRoutes from "./routes/contact.route.js";
import AdminRoutes from "./routes/admin.route.js";


app.use(express.json());
app.use(db.cors('*'));
app.use('/api', ReservationRoutes, ContactRoutes);
app.use('/admin', AdminRoutes); 

const startserver = async () =>{
    try{ 
        await db.mongoose.connect(db.url, {
            dbName : "cleanSpace"        
        });
        console.log("Connection to the database successful");
        
        app.listen(db.PORT,'0.0.0.0',()=>{
            console.log("http://localhost:"+db.PORT);
        })  
    }catch(error){
        console.log(error.message);
    }
} 
startserver();

export default app;