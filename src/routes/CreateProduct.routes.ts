import  { Router } from 'express';
import  { add,listing,update,remove } from '../controllers/product.controller'

const remerasRouter = Router();
remerasRouter.post('/:modelName/add', add);
remerasRouter.get('/:modelName/listing', listing);
remerasRouter.post('/:modelName/update/:id', update);
remerasRouter.delete('/:modelName/remove/:id', remove);

const camperasRouter = Router();
camperasRouter.post('/:modelName/add', add);
camperasRouter.get('/:modelName/listing', listing);
camperasRouter.post('/:modelName/update/:id', update);
camperasRouter.delete('/:modelName/remove/:id', remove);

const busosRouter = Router();
busosRouter.post('/:modelName/add', add);
busosRouter.get('/:modelName/listing', listing);
busosRouter.post('/:modelName/update/:id', update);
busosRouter.delete('/:modelName/remove/:id', remove);

const pantalonesRouter = Router();
pantalonesRouter.post('/:modelName/add', add);
pantalonesRouter.get('/:modelName/listing', listing);
pantalonesRouter.post('/:modelName/update/:id', update);
pantalonesRouter.delete('/:modelName/remove/:id', remove);

export  { remerasRouter, busosRouter, camperasRouter, pantalonesRouter };

