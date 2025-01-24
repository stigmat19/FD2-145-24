const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express();
app.use(cors())

app.get('/cars', (request, response) => {

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "CarsDB",
        password: ""
    });

    connection.connect((err) => {
        if (err) {
            return console.error('err', err);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");

            connection.query('SELECT * FROM Cars', (err, result) => {
                console.log('-----result', result);

                response.json(result)
            })

            connection.end();
        }
    })

})

app.get('/car1', (request, response) => {
    response.send("<h2>Привет test222</h2>");
})

app.listen('3000', () => {
    console.log('server is run')
})