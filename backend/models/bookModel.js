import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required']
        },
        author: {
            type: String,
            required: [true, 'Author is required']
        },
        publishYear: {
            type: Number,
            required : true
        },
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('Book', bookSchema);

// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;
