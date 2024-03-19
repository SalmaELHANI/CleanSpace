import db from "./index.js";

const contactSchema = new db.mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }
});

const Contact = db.mongoose.model('Contact', contactSchema);
export default Contact;