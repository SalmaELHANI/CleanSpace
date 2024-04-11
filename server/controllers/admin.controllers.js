import db from "../models/index.js";
import { createToken } from "../middleware/adminMiddleware.js"

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!password || !email) {
            return res.status(400).send("email or Password is not valid ");
        }
        const admin = await db.admin.findOne({ email });
        if (!admin || !(await db.bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Email or password incorrect' });
        }
        const token = createToken(admin);
        res.status(200).json({ token , id: admin._id});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createAdmin = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const existingadmin = await db.admin.findOne({ email });
        if (existingadmin) {
            return res.status(400).json({ message: 'admin already exists' });
        }
        const hashedPassword = await db.bcrypt.hash(password, 10);

        const newadmin = new db.admin({ username, email, password: hashedPassword, role });
        await newadmin.save();

        res.status(201).json({ message: 'admin created successfully' });
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await db.admin.find();
        res.status(200).json(admins);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const getAdminById = async (req, res) => {
    const { id } = req.params;
    try {
        const admin = await db.admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error('Error fetching admin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateAdminRole = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    try {
        const admin = await db.admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        admin.role = role;
        await admin.save();
        res.status(200).json({ message: 'Admin role updated successfully' });
    } catch (error) {
        console.error('Error updating admin role:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const admin= await db.admin.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        console.error('Error deleting admin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};