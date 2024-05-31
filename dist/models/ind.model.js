"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamperaModel = exports.PantalonModel = exports.BusoModel = exports.RemeraModel = exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.ProductModel = mongoose_1.default.model('Products', new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
}));
exports.RemeraModel = exports.ProductModel.discriminator('Remera', new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
}));
exports.BusoModel = exports.ProductModel.discriminator('Buso', new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
}));
exports.PantalonModel = exports.ProductModel.discriminator('Pantalon', new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
}));
exports.CamperaModel = exports.ProductModel.discriminator('Campera', new mongoose_1.Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    marca: { type: String, required: true },
    talle: { type: String, required: true },
    precio: { type: Number, required: true },
    color: { type: String, required: true },
    descripcion: { type: String, required: true },
    id: { type: String, required: true },
}));
