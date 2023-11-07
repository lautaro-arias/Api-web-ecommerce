import express  from 'express';
import morgan from 'morgan';
import cors from 'cors' 
import router from './routes/CreateProduct.routes'
import mongoose from 'mongoose';

//inicial
const app = express()
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mydb';

//config
app.set('port',process.env.PORT || 4000)

// Configuración de cors
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};


//middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.get('/',(req,res) => {
    res.send(`Estamos en el puerto ${app.get('port')}`)
})


app.use('/products',router);

export default app 