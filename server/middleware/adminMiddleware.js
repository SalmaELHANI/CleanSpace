import db from "../models/index.js";
import jwt from 'jsonwebtoken';

export const createToken = (admin) => {
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.adminId = decoded.id;
    next();
  });
};

export const verifySuperAdmin = async (req, res, next) => {
  try {
    await verifyToken(req, res, () => {});
    const admin = await db.admin.findById(req.adminId);
    if (!admin || !admin.role || admin.role !== 'superadmin') {
      return res.status(403).json({ message: 'Admin does not have permission' });
    }
    next();
  } catch (error) {
    console.error("Error during admin verification:", error.message);
    return res.status(500).send("Internal Server Error");
  }
};
