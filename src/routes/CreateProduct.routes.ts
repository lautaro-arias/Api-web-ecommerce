import  { Router } from 'express';
import  { create,add,listing,remove } from '../controllers/product.controller'

const router = Router();
router.get('/create',create)
router.post('/add',add)
router.get('/listing',listing)
router.delete('/remove',remove)

export default router;

