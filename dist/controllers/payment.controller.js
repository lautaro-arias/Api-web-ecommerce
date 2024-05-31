"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.payment = void 0;
const mercadopago_1 = require("mercadopago");
// Configura el cliente de MercadoPago
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: '.env',
    options: { timeout: 5000 }
});
const payment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Crea una instancia de Preference usando la configuración de MercadoPago
    const preference = new mercadopago_1.Preference(client);
    try {
        //Cuerpo de la solicitud
        const preferenceData = {
            items: [
                {
                    id: req.body.id,
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                },
            ],
            back_urls: {
                success: 'http://localhost:4000/feedback',
                failure: 'http://localhost:4000/feedback',
                pending: 'http://localhost:4000/feedback',
            },
            auto_return: 'approved',
        };
        // Crea la preferencia utilizando la instancia de Preference
        const response = yield preference.create({ body: preferenceData });
        console.log(response);
        return res.status(200).json(response);
    }
    catch (error) {
        console.error('Error al procesar el pago:', error);
        return res.status(400).json({ msg: 'Error al procesar pago', error });
    }
});
exports.payment = payment;
const data = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});
exports.data = data;
