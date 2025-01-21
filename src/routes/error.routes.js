import { Router } from "express";
import { errorHandler } from '../middleware/errorHandler.js';
import { CustomError, NotFoundError } from '../utils/error.manager.js';

const router = Router();

router.get('/', (req, res, next)=>{
    const admin = false
    const data = null
    try {
        // if(!data) throw new NotFoundError('Not Found')
        if(!data) throw new CustomError('Not found', 404, 'Not Found Error')
        if(!admin) throw new Error('Error get by id products')
        return res.send(admin)
    } catch (error) {
        // throw error
        next(error)
    }})

export default router;