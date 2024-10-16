import express from 'express';
import { logger } from './middlewares/logger.js';
import { formatName } from './middlewares/formatName.js';

import { router as usuariosRouter } from './routes/usuariosRouter.js';
import { auth } from './middlewares/auth.js';
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger)
// app.use(auth)

app.use("/api/usuarios", usuariosRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.get(
    "/contacto",
    formatName,
    (req, res, next)=>{
        console.log(`Otro middleware a nivel ruta, "on line"...`)
        next()
    },
    (req, res) => {


        res.send({ mensaje: "ruta contacto", queryParams: req.query })
    }
)

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
