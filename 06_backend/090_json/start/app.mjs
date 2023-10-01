import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();


app.get('/', function(req, res) {
    //JSONで表示させる(自動的にJSON stringifyにする)
    res.json({message: 'hello', number: 1, array: [
        'banana', 'orange', 1
        ]});
});

app.listen(PORT, function() {
    console.log(`Server start: http://localhost:${PORT}`)
});
