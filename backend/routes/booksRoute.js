import express from 'express';
//import * as tea from '../controllers/tea.mjs';
//import { newTea, newTea2 } from '../controllers/tea.mjs';
import * as books from '../controllers/booksController.mjs';

const router = express.Router();

router.get('/', books.getBooks);

router.get('/:id', books.getBook);

router.post('/', books.saveBook);

router.put('/:id', books.updateBook);

router.delete('/:id', books.deleteBook);

export default router;
