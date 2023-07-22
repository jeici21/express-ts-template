import express from "express";

const app = express()
const PORT = 5000

app.get("/", (req, res) => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    res.send("Hello World!")
})

app.listen(PORT)
