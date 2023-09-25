import express from "express";

const app = express()
const PORT = Number(process.env.PORT) || 5000

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})