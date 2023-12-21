import  { MercadoPagoConfig, Preference } from 'mercadopago';
import { Request, Response, json } from 'express';

const client =  new MercadoPagoConfig({  
  accessToken: 'TEST-7671113606844887-121907-4b453e26fe332f118153e22a75818419-1599227887',
  options: { timeout: 5000 } 
});

export const payment = async (req: Request, res: Response) => {  
  // Crea una instancia de Preference usando la configuración de MercadoPago
  const preference = new Preference(client);

  try {
    // Construye el objeto de preferencia con los datos del cuerpo de la solicitud
    const preferenceData = {
      items: [
        {
          id:req.body.id,
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: 'http://localhost:4000/feedback',
        failure: 'http://localhost:4000/feedback',
        pending: 'http://localhost:4000/feedback',
      },
      auto_return: 'approved',
    };
    // Crea la preferencia utilizando la instancia de Preference
    const response = await preference.create({ body: preferenceData });
    console.log(response)
    return res.status(200).json(response)
    //console.log('ID de la preferencia:', response.body.id);
    // Haz algo con la respuesta, por ejemplo, establecerla en el estado
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    return res.status(400).json({ msg: 'Error al procesar pago', error });
    // Maneja el error como prefieras
  }
};

export const data = async (req:Request,res:Response) => {
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
};
    