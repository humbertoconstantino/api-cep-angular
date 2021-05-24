const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/viacep'));

app.get('/*', (req, res)=> {
    res.sendFile(__dirname + '/dist/viacep/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor niciado na porta ' + PORT);
})