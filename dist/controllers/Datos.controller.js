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
exports.newTasks = void 0;
const ind_model_1 = require("../models/ind.model");
const newTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, tarea, cantidad, precio, completed } = req.body;
        const newTask = new ind_model_1.ProductModel({ nombre, tarea, cantidad, precio, completed });
        // Guarda la tarea y obtiene el ID generado por Mongoose
        const savedTask = yield newTask.save();
        const taskId = savedTask._id;
        // Devuelve el ID en la respuesta//
        return res.status(201).json(Object.assign({ id: taskId }, savedTask.toObject()));
    }
    catch (error) {
        return res.status(400).json({ msg: "Error al agregar una nueva tarea", error });
    }
});
exports.newTasks = newTasks;
