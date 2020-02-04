const mongoose = require('mongoose');
const FavoriteBook = mongoose.model('FavoriteBook');

exports.get = async () => {
    return await FavoriteBook.find();
}

const isFavoriteBook = async (bookId) => {
    return await FavoriteBook.exists({ bookId });
}

exports.isFavoriteBook = isFavoriteBook;

exports.updateFavoriteBook = async (book) => {
    const isFavorite = await isFavoriteBook(book.id);

    if (isFavorite) {
        await FavoriteBook.findOneAndDelete({ bookId: book.id });
    } else {
        const favoriteBook = new FavoriteBook({
            bookId: book.id,
            title: book.title,
            authors: book.authors,
            publishedDate: book.publishedDate,
            description: book.description,
            thumbnail: book.thumbnail
        });
        await favoriteBook.save();
    }
    return !isFavorite;
}