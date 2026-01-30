import { writeRegister } from "../utils/fileWriter.js";
import { getDate } from "../utils/getDateTime.js";
import { getClientIp } from "../utils/getId.js";

export function registrarPonto(req, res) {
    const { latitude, longitude } = req.body;
    const foto = req.file;

    if(!latitude || !longitude || !foto) {
        return res.status(400).json({ error: 'Dados inválidos'});
    }

    const ip = getClientIp(req);
    const dateTime = getDate();

    writeRegister({
        dateTime,
        latitude,
        longitude,
        ip,
        imagePath: foto.path
    })

    return res.json({
        message: "Registro bem sucedido!",
        dateTime,
        latitude,
        longitude,
        ip,
        foto: foto.filename
    })
}