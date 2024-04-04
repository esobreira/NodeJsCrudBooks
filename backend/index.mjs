import { MONGODBURL, PORT } from './config.js';

import express from 'express';
import mongoose from 'mongoose';

import booksRoute from './routes/booksRoute.js'

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/books", booksRoute);

// app.get('/', (req, res) => {
//     console.log(req);
//     return res.status(204).send('Welcome to MERN Stack Tutorial');
// });

mongoose
    .connect(MONGODBURL)
    .then(() => {

        console.log('Conectado com sucesso.');

        app.listen(PORT, () => {
            console.log("Aplicação rodando...");
        })

    })
    .catch((error) => {
        console.log(error);
    })

