import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000 ;

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('db is connect')
    } catch (error) {
        throw new Error(error)
    }
}



app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.set(express.json());
app.use(express.urlencoded({extended:false}))




import InputRoutes from './route/InputRoutes.js';

app.use('/input',InputRoutes);


app.listen(port,()=>{
    connect();
    console.log(`server is running in ${port}`)
})