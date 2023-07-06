import express from 'express';
const Routes = express.Router();
import {DelInput, GetDisplayInput, GetInput, PostInput} from '../controller/InputController.js';

Routes.get('/',GetDisplayInput)

Routes.get('/PostInput',GetInput)

Routes.post('/PostInput',PostInput)

Routes.delete('/DelInput/:id',DelInput)

export default Routes