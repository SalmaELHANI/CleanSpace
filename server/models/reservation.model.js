import db from "./index.js";

const reservationSchema = new db.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    residenceType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const Reservation = model('Reservation', reservationSchema);
export default Reservation;
