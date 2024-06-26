import  { MercadoPagoConfig, Preference } from 'mercadopago';
import { Request, Response, json } from 'express';

// Configura el cliente de MercadoPago
const client = new MercadoPagoConfig({
  accessToken:'.env',
  options: { timeout: 5000 }
});

export const payment = async (req: Request, res: Response) => {  
  // Crea una instancia de Preference usando la configuración de MercadoPago
  const preference = new Preference(client);

  try {
    //Cuerpo de la solicitud
    const preferenceData = {
      items: [
        {
          id:req.body.id,
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      auto_return: 'approved',
    };
    // Crea la preferencia utilizando la instancia de Preference
    const response = await preference.create({ body: preferenceData });
    console.log(response)
    return res.status(200).json( response );
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    return res.status(400).json({ msg: 'Error al procesar pago', error });
  }
};

export const data = async (req:Request,res:Response) => {
  return res.status(200).json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
};
    