import { Book } from '../models/bookModel.js';

async function saveBook(req, res) {
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

        const book = await create(newBook);

        return res.status(201).send({message: 'Book created successfully!'});
        
    } catch (error) {
        return res.status(500).send({ message: error.message});
    }
};

async function getBooks(req, res) {
    try {
        const books = await find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function getBook(req, res) {
    try {
        const { id } = req.params;
        const book = await Product.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function updateBook(req, res) {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear) {
                return res.status(400).send('Any of product params are invalid.');
            }
        
        const { id } = req.params;
        const book = await findByIdAndUpdate(id, req.body);

        if (!book) {
            res.status(400).json({ message: "Book not found." })
        }

        const updated = await findById(id);
        res.status(200).json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

async function deleteBook(req, res) {
    try {
        const { id } = req.params;

        const book = await findByIdAndDelete(id);

        if (!book) {
            res.status(400).json({ message: "Book not found." })
        }

        res.status(200).json();

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export { 
    getBooks,
    getBook,
    saveBook,
    updateBook,
    deleteBook
};