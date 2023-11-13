import { Request, Response, json } from 'express';
import mongoose from 'mongoose';
import { ProductModel} from '../models/indumentaria.model'
import {busoProducts } from '../data-Product/buso'



export const create = ((req:Request,res:Response) => {
  try {
  return res.status(200).json({msg:"ko"})

  } catch (error) { 
  return res.status(400).json({msg:"Error al iniciar",error})
  }
});


export const add = async (req: Request, res: Response) => {
  try {
    // Itera sobre los productos del array
    for (const newProduct of busoProducts) {
      // Verifica si el producto ya existe en la base de datos por el campo ID
      const existingProduct = await ProductModel.findOne({ id: newProduct.id });

      if (!existingProduct) {
        // Si el producto no existe, agrégalo a la base de datos
        await ProductModel.create(newProduct);
      } //AGREGAR VALIDACION POR SI INTENTAS AÑADIR EL MISMO PRODUCTO TE DIGA 
    }

    return res.status(201).json({ msg: "Productos agregados exitosamente" });
  } catch (error) {
    return res.status(400).json({ msg: "Error al agregar productos", error });
  }
};

export const listing = ( async (req:Request,res:Response) => { 
  try {
      const product = await  ProductModel.find();
      console.log("ok")
      return res.status(200).json(product) 

      }catch (error) {
        console.log("eror")
      return res.status(400).json({msg:"Error al mostrar el listado",error})
      }
  });

  export const remove = (async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Encuentra el producto en la base de datos y elimínalo
      const deletedProductBase = await ProductModel.findOneAndDelete({ _id: id });
  
      if (deletedProductBase) {
        console.log("Producto interno a eliminar manunalmente ",{ deletedProductBase })
        return res.status(200).json({ msg: "Producto eliminado exitosamente en la base de datos", deletedProductBase });
      } else {
        return res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: "Error al eliminar un producto"});
    }
  });


  