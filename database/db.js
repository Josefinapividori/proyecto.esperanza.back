const mongoose = require('mongoose')


const mongoURL = 'mongodb://localhost/proyecto';

const db = async () => {
    await mongoose
        .connect(mongoURL)
        .then(() => console.log("DB FUNCIONANDO"))
        .catch((error) => console.error(error));
};

module.exports = db 