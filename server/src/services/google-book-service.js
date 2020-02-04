const axios = require('axios');

exports.get = async (search, index = 0) => {
    try {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&projection=lite&startIndex=${index}`);
    } catch (error) {
        throw error;
    }
}