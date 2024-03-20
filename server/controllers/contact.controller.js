import db from "../models/index.js";

export const createContact = async (req, res) => {
    try {
        const { email, question } = req.body;
        if (!email || !question) {
            return res.status(400).json({ message: "Email and question are required." });
        }
        const newContact = new  db.contact({ email, question });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }  
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await db.contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await db.contact.findById(id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, question } = req.body;
        const updatedContact = await db.contact.findByIdAndUpdate(id, { email, question }, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await db.contact.findByIdAndRemove(id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
