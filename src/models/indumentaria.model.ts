import mongoose, { Schema, model } from 'mongoose';
import { Product } from './indumentaria.interfaz';

export const ProductModel = mongoose.model('Products',new Schema<Product> ({
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

export const RemeraModel = mongoose.model('Products/Remera',new Schema<Product> ({
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
export const BusoModel = mongoose.model('Products/Buso',new Schema<Product> ({
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
export const PantalonModel = mongoose.model('Products/Pantalon',new Schema<Product> ({
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
export const CamperaModel = mongoose.model('Products/Campera',new Schema<Product> ({
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
