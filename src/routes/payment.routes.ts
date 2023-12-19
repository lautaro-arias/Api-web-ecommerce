import { payment } from '../controllers/payment.controller';
import  { Router } from 'express';

const paymentRouter = Router()

paymentRouter.post('/create-order',payment)
paymentRouter.get('/success',(req,res) => res.send('order-success'))
paymentRouter.get('/webhook',(req,res) => res.send('webhook'))

export { paymentRouter }