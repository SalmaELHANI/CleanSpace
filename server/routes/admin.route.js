import express from 'express';
import { login, getAllAdmins, getAdminById, updateAdminRole, createAdmin, deleteAdmin } from '../controllers/admin.controllers.js';
import { verifySuperAdmin ,verifyToken  } from '../middleware/adminMiddleware.js';

const router = express.Router();

router.post('/login', login);

router.put('/:id',verifySuperAdmin, updateAdminRole);

router.get('/',verifySuperAdmin, getAllAdmins);

router.get('/:id', getAdminById);

router.post('/createadmin',verifySuperAdmin, createAdmin);

router.delete('/:id',verifySuperAdmin, deleteAdmin);

export default router;
