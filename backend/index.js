import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { Book } from './models/bookModel.js';
import { MONGODBURL, PORT } from './config.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(204).send('Welcome to MERN Stack Tutorial');
});

//Route to Save a new book
app.post('/books', async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear) {
                return res.status(400).send('Any of product params are invalid.');
            }
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);

        return res.status(201).send({message: 'Book created successfully!'});
        
    } catch (error) {
        return res.status(500).send({ message: error.message});
    }
});

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

