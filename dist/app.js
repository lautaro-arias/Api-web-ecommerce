"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const CreateProduct_routes_1 = require("./routes/CreateProduct.routes");
const payment_routes_1 = require("./routes/payment.routes");
//inicial
const app = (0, express_1.default)();
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mydb';
//config
app.set('port', process.env.PORT || 4000);
//
// Configuración de cors
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
//
//middlewares
app.use(express_1.default.static('public', {
    maxAge: '1d', // Duración máxima de caché para los archivos estáticos 
}));
app.use((0, morgan_1.default)('dev')); //me muestra las peticiones ej Get/ 304 
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes 
app.get('/', (req, res) => {
    res.send(`Estamos en el puerto ${app.get('port')}`);
});
app.use('/', payment_routes_1.paymentRouter);
app.use('/', CreateProduct_routes_1.remerasRouter);
app.use('/', CreateProduct_routes_1.busosRouter);
app.use('/', CreateProduct_routes_1.camperasRouter);
app.use('/', CreateProduct_routes_1.pantalonesRouter);
exports.default = app;
