import express from "express";
import connectData from "./config/dbConnect.js";

const connect = await connectData();

connect.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
  
connect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})


const port = 8080;
const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

function searchLivro (id) {
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}

app.get('/', (req, res) => {
    res.send({'mensage': 'ola'})
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const search = searchLivro(req.params.id);

    res.status(200).json(livros[search])
});

app.put("/livros/:id", (req, res) => {
    const search = searchLivro(req.params.id);

    livros[search].título = req.body.titulo;

    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const search = searchLivro(req.params.id);

    livros.splice(search, 1);
    res.status(200).send('deletado com sucesso');
})

app.post('/livros', (req, res) => {
    livros.push(req.body);

    res.status(200).send('salvo')
});

app.listen(port, () => console.log(`https://localhost:8080`))

