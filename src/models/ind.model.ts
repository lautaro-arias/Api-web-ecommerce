import mongoose, { Schema, model } from 'mongoose';
import { Product } from './ind.interfaz';

export const ProductModel = mongoose.model('Product',new Schema<Product> ({
    tipo        :   { type  :   String,required :   true} ,
    nombre      :   { type  :   String,required :   true} , 
    img         :   { type  :   String,required :   true} ,
    marca       :   { type  :   String,required :   true} , 
    talle       :   { type  :   String,required :   true} , 
    precio      :   { type  :   Number,required :   true} , 
    color       :   { type  :   String,required :   true} , 
    descripcion :   { type  :   String,required :   true} , 
    id          :   { type  :   String,required :   true} ,
}))