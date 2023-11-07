import { Request, Response, json } from 'express';
import mongoose from 'mongoose';
import { ProductModel} from '../models/ind.model'
import { busoProducts } from '../data-Product/buso'


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

  ///revisar NO anda
  export const remove = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Encuentra el producto en la base de datos y elimínalo
      await ProductModel.findByIdAndRemove(id);
  
      return res.status(200).json({ msg: "Producto eliminado exitosamente" });
    } catch (error) {
      return res.status(400).json({ msg: "Error al eliminar un producto", error });
    }
  };