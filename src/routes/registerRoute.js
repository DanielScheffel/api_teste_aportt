import express from "express";
import multer from "multer";
import { registrarPonto } from "../controllers/registerController.js";
import { getRegistros } from "../controllers/getRegistersController.js";

const router = express.Router();

// Configuração básica do multer
const upload = multer({ dest: 'src/uploads/'});

// Rotas da aplicação
router.post('/registro', upload.single('foto'), registrarPonto);
router.get('/registros', getRegistros)

export default router;