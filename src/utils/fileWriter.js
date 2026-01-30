import fs from 'fs';
import path from 'path';

// Caminho do arquivo registros.txt
const filePath = path.resolve('src/data/registros.txt'); //path.resolve garante o caminha correto do arquivo

export function writeRegister(data) {

    const content = `
        Data/Hora: ${data.dateTime}
        Latitude: ${data.latitude}
        Longitude: ${data.longitude}
        IP: ${data.ip}
        Imagem: ${data.imagePath}
        ------------------------------
    `;

    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.log('Erro ao escrever no arquivo: ', err);
        }
    });

}