import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/livro.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Erro de Conexão'))
db.once('open', () => {
    console.log("Conexão com o Banco de Dados realizada com sucesso!")
})

const app = express();

app.use(express.json());

routes(app);

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send("Livro removido com sucesso.");
})

export default app;