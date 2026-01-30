import { readRegisters } from "../utils/fileReader.js";


export async function getRegistros(req, res) {
    
    try {
        const content = await readRegisters();

        return res.status(200).json({
            registros: content
        });
    } catch (error) {
        // console.error('ERRO AO LER ARQUIVO: ', error)

        return res.status(500).json({
            error: 'Erro ao ler registros'
        });
    }

}