import mongoose, { Schema, model } from 'mongoose';
import { Product } from './indumentaria.interfaz';


export const RemeraModel = mongoose.model('Products-remeras',new Schema<Product> ({
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
export const BusoModel = mongoose.model('Products-busos',new Schema<Product> ({
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
export const PantalonModel = mongoose.model('Products-pantalones',new Schema<Product> ({
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
export const CamperaModel = mongoose.model('Products-camperas',new Schema<Product> ({
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
