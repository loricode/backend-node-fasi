import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//controllers
import productController from './controllers/product.controller.js';


//For env File 
dotenv.config();

let app = express();

app.use(cors());
app.use(express.json())

app.set('port', process.env.PORT || 4000 );

app.use('/api/product', productController);


app.get('/', (req, res) => {
   res.send('Welcome to Express and TypeScript Server');
 });

 app.listen(app.get('port'), function() {
   console.log("listening", app.get('port'))
});