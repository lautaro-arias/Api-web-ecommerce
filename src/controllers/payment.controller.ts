import { MercadoPagoConfig, Preference } from 'mercadopago';
import { Request, Response, json } from 'express';

export const payment = async (req:Request,res:Response) => {  
    const client =  new MercadoPagoConfig({ accessToken: 'TEST-7671113606844887-121907-4b453e26fe332f118153e22a75818419-1599227887',
     options: { timeout: 5000 } 
    });

    const preference = new Preference(client);
    
    preference.create({ body: {
        items: [
            {
            id: '1',
            category_id: '',
            currency_id: 'ARS',
            description: 'darking',
            title: 'remera',
            quantity: 1,
            unit_price: 100
            }
        ],
    } }).then(console.log).catch(console.log);



}
