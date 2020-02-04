const bookService = require('../services/google-book-service');
const repository = require('../repositories/favoriteBook-repository');

formatListResult = async (items) => {
    for (let index = 0; index < (items || []).length; index++) {
        items[index].favorite = await repository.isFavoriteBook(items[index].id);
    }
}

exports.get = async (req, res, next) => {
    try {
        const { search = '', index = 0 } = req.query;
        if (!search) {
            return res.status(400).send({ message: 'Parametro de pesquisa não informado' });
        }

        const response = await bookService.get(search, index);
        const data = response.data;
        await formatListResult(data.items);

        res.status(200).send(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
        })
    }
}

exports.getFavoriteBooks = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            error: e
        })
    }
}

exports.updateFavoriteBook = async (req, res, next) => {
    try {
        const isFavorite = await repository.updateFavoriteBook(req.body);
        res.status(200).send({ isFavorite });
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            error: e
        })
    }
}