import express  from 'express';
import morgan from 'morgan';
import cors from 'cors' ;
import {remerasRouter,busosRouter,camperasRouter,pantalonesRouter} from './routes/CreateProduct.routes';
import { paymentRouter } from './routes/payment.routes';

//inicial
const app = express()
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mydb';

//config
app.set('port',process.env.PORT || 4000)
//

// Configuración de cors
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
//

//middlewares
app.use(express.static('public', {
    maxAge: '1d', // Duración máxima de caché para los archivos estáticos 
}));
app.use(morgan('dev'));//me muestra las peticiones ej Get/ 304 
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.get('/',(req,res) => {
    res.send(`Estamos en el puerto ${app.get('port')}`)
});

app.use('/',paymentRouter);
app.use('/', remerasRouter);
app.use('/', busosRouter);
app.use('/', camperasRouter);
app.use('/', pantalonesRouter);

export default app ;