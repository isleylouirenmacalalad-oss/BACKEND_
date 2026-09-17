import * as bookModel from '../models/bookModels.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookModel.fetchAllBooks();
    return books;
}