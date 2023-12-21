import { payment,data } from '../controllers/payment.controller';
import  { Router } from 'express';

const paymentRouter = Router()

paymentRouter.post('/create-order',payment)
paymentRouter.get('/data-order',data)

export { paymentRouter,data }