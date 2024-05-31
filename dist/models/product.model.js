"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
});
exports.ProductModel = (0, mongoose_1.model)('Products', productSchema);
