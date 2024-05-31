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
exports.update = exports.remove = exports.listing = exports.add = void 0;
const indumentaria_model_1 = require("../models/indumentaria.model");
const buso_1 = require("../data-Product/buso");
const campera_1 = require("../data-Product/campera");
const remera_1 = require("../data-Product/remera");
const pantalon_1 = require("../data-Product/pantalon");
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //model y productos
        const productArrays = [
            { model: indumentaria_model_1.CamperaModel, products: campera_1.camperaProducts },
            { model: indumentaria_model_1.RemeraModel, products: remera_1.remeraProducts },
            { model: indumentaria_model_1.PantalonModel, products: pantalon_1.pantalonProducts },
            { model: indumentaria_model_1.BusoModel, products: buso_1.busoProducts },
        ];
        let productAdded = false;
        for (const { model, products } of productArrays) {
            for (const newProduct of products) {
                // Verifica si el producto ya existe en la base de datos por id
                const existingProduct = yield model.findOne({ id: newProduct.id });
                if (!existingProduct) {
                    // Si el producto no existe, agrégalo a la base de datos
                    yield model.create(newProduct);
                    productAdded = true;
                }
            }
        }
        if (productAdded) {
            return res.status(201).json({ msg: "Productos agregados exitosamente" });
        }
        else {
            return res.status(200).json({ msg: "No se agregaron productos, que ya existen previamente" });
        }
    }
    catch (error) {
        return res.status(400).json({ msg: "Error al agregar productos", error });
    }
});
exports.add = add;
const listing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Pasamemos el parametro modelName
        const modelName = req.params.modelName;
        // Según el parámetro recibido, selecciona el modelo correspondiente
        let selectedModel;
        switch (modelName) {
            case 'products-camperas':
                selectedModel = indumentaria_model_1.CamperaModel;
                break;
            case 'products-remeras':
                selectedModel = indumentaria_model_1.RemeraModel;
                break;
            case 'products-pantalones':
                selectedModel = indumentaria_model_1.PantalonModel;
                break;
            case 'products-busos':
                selectedModel = indumentaria_model_1.BusoModel;
                break;
            default:
                return res.status(400).json({ msg: 'Modelo no válido' });
        }
        // Busca y devuelve la lista de productos para el modelo seleccionado
        const products = yield selectedModel.find();
        console.log();
        return res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error en el servidor' });
    }
});
exports.listing = listing;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Pasamemos el parametro modelName y id
        const { modelName, id } = req.params;
        // Según el parámetro recibido, selecciona el modelo correspondiente
        let selectedModel;
        switch (modelName) {
            case 'products-camperas':
                selectedModel = indumentaria_model_1.CamperaModel;
                break;
            case 'products-remeras':
                selectedModel = indumentaria_model_1.RemeraModel;
                break;
            case 'products-pantalones':
                selectedModel = indumentaria_model_1.PantalonModel;
                break;
            case 'products-busos':
                selectedModel = indumentaria_model_1.BusoModel;
                break;
            default:
                return res.status(400).json({ msg: 'Modelo no válido' });
        }
        const deletedProductBase = yield selectedModel.findOneAndDelete({ _id: id });
        if (deletedProductBase) {
            console.log("Eliminar producto interno manualmente:", deletedProductBase);
            return res.status(200).json({ msg: "Producto eliminado exitosamente en la base de datos", deletedProductBase });
        }
        else {
            return res.status(404).json({ msg: "Producto no encontrado" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ msg: "Error al eliminar un producto" });
    }
});
exports.remove = remove;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Pasamemos el parametro modelName y id
        const { modelName, id } = req.params;
        //Datos a actualizar
        const { tipo, nombre, img, marca, talle, precio, rebaja, number, color, descripcion } = req.body;
        // Según el parámetro recibido, selecciona el modelo correspondiente
        let selectedModel;
        switch (modelName) {
            case 'products-camperas':
                selectedModel = indumentaria_model_1.CamperaModel;
                break;
            case 'products-remeras':
                selectedModel = indumentaria_model_1.RemeraModel;
                break;
            case 'products-pantalones':
                selectedModel = indumentaria_model_1.PantalonModel;
                break;
            case 'products-busos':
                selectedModel = indumentaria_model_1.BusoModel;
                break;
            default:
                return res.status(400).json({ msg: 'Modelo no válido' });
        }
        yield selectedModel.findByIdAndUpdate(id, { tipo, nombre, img, marca, talle, precio, rebaja, number, color, descripcion });
        return res.status(200).json({ msg: 'Cambios realizados' });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ msg: 'Error', error });
    }
});
exports.update = update;
