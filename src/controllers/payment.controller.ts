import  mercadopago,{ MercadoPagoConfig, Payment } from 'mercadopago';
import { Request, Response, json } from 'express';



//volver a hacer pruebas de todo
export const payment = async (req:Request,res:Response) => {  
    const client = new MercadoPagoConfig({ accessToken: 'TEST-4268166246905557-121907-d80f0d8df86261eeb064acc9165d864e-338813628', options: { timeout: 5000, idempotencyKey: 'abc' } });

    const payment = new Payment(client);

    const body = {
        transaction_amount: 12.34,
        description: 'remera',
        payment_method_id: 'ARG',
        payer: {
            email: 'arias@gmail.com'
        },
    };
    // Step 5: Make the request
    payment.create({ body }).then(console.log).catch(console.log);
    return res.status(200).json({body})

}

/* const client = new MercadoPagoConfig({
        accessToken: 'TEST-4268166246905557-121907-d80f0d8df86261eeb064acc9165d864e-338813628',
        options: { timeout: 5000, idempotencyKey: 'abc' }
    });
    
    const payment = new Payment(client);

    const body = ({
            ip_adress:"123.444.555",
            id:"01",
            title: 'Mi producto',
            unit_price: 64,
            quantity: 1,
            description: 'remera',
            payment_method_id: 'Ars',
            payer: {
                email: 'ariass@gmail.com',
                first_name:"comprador",
                last_name:"comprador",
                phone:{ area_code:"2625",number:"334455" },
                adrdress:{zip_code:"5620",street_name:"vllc",street_number:"14600"}

                },
        purpose: 'wallet_purchase'
    })
        payment.create({ body }).then(console.log).catch(console.log);
        console.log("BODY",body)
        console.log("BODY",body)
        console.log("PAYMENT",payment)
    return res.status(200).json({msg:'hola'})*/