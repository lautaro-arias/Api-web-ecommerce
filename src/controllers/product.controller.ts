import { Request, Response, json } from 'express';
import { BusoModel,CamperaModel,RemeraModel,PantalonModel} from '../models/indumentaria.model';
import {busoProducts } from '../data-Product/buso';
import {camperaProducts } from '../data-Product/campera';
import {remeraProducts } from '../data-Product/remera';
import {pantalonProducts } from '../data-Product/pantalon';


export const add = async (req: Request, res: Response) => {
  try {
    //model y productos
    const productArrays = [
      { model: CamperaModel , products: camperaProducts   },
      { model: RemeraModel  , products: remeraProducts    },
      { model: PantalonModel, products: pantalonProducts  },
      { model: BusoModel    , products: busoProducts      },
    ]
    let productAdded = false;

    for (const { model, products } of productArrays) {
      for (const newProduct of products) {
         // Verifica si el producto ya existe en la base de datos por id
        const existingProduct = await model.findOne({ id: newProduct.id });
      if (!existingProduct) {
        // Si el producto no existe, agrégalo a la base de datos
        await model.create(newProduct);
        productAdded = true;
        }
      } 
    }
      if (productAdded) {
        return res.status(201).json({ msg: "Productos agregados exitosamente" });
      } else {
        return res.status(200).json({ msg: "No se agregaron productos, que ya existen previamente" });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Error al agregar productos", error });
    }
  }

  export const listing = async (req: Request, res: Response) => {
    try {
      //Pasamemos el parametro modelName
      const modelName = req.params.modelName; 
      // Según el parámetro recibido, selecciona el modelo correspondiente
      let selectedModel;
      switch (modelName) {
        case 'products-camperas':
          selectedModel = CamperaModel;
          break;
        case 'products-remeras':
          selectedModel = RemeraModel;
          break;
        case 'products-pantalones':
          selectedModel = PantalonModel;
          break;
        case 'products-busos':
          selectedModel = BusoModel;
          break;
        default:
          return res.status(400).json({ msg: 'Modelo no válido' });
      }
      // Busca y devuelve la lista de productos para el modelo seleccionado
      const products = await selectedModel.find();
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Error en el servidor' });
    }
  };


  export const remove = async (req: Request, res: Response) => {
    try {
      //Pasamemos el parametro modelName y id
      const { modelName,id } = req.params;
      // Según el parámetro recibido, selecciona el modelo correspondiente
      let selectedModel;
      
      switch (modelName) {
        case 'products-camperas':
          selectedModel = CamperaModel;
          break;
        case 'products-remeras':
          selectedModel = RemeraModel;
          break;
        case 'products-pantalones':
          selectedModel = PantalonModel;
          break;
        case 'products-busos':
          selectedModel = BusoModel;
          break;
        default:
          return res.status(400).json({ msg: 'Modelo no válido' });
      }
  
      const deletedProductBase = await selectedModel.findOneAndDelete({ _id: id });
  
      if (deletedProductBase) {
        console.log("Eliminar producto interno manualmente:",deletedProductBase)
        return res.status(200).json({ msg: "Producto eliminado exitosamente en la base de datos", deletedProductBase });
      } else {
        return res.status(404).json({ msg: "Producto no encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: "Error al eliminar un producto"});
    }
  };
  
  export const update = async (req: Request, res: Response) => {
    try {
      //Pasamemos el parametro modelName y id
      const { modelName,id } = req.params;

      //Datos a actualizar
      const {tipo,nombre,img,marca,talle,precio,number,color,descripcion} = req.body;

      // Según el parámetro recibido, selecciona el modelo correspondiente
      let selectedModel;

      switch (modelName) {
        case 'products-camperas':
          selectedModel = CamperaModel;
          break;
        case 'products-remeras':
          selectedModel = RemeraModel;
          break;
        case 'products-pantalones':
          selectedModel = PantalonModel;
          break;
        case 'products-busos':
          selectedModel = BusoModel;
          break;
        default:
          return res.status(400).json({ msg: 'Modelo no válido' });
      }
      await selectedModel.findByIdAndUpdate(id,{tipo,nombre,img,marca,talle,precio,number,color,descripcion});
          
      return res.status(200).json({ msg: 'Cambios realizados' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: 'Error', error });
    }
  };


