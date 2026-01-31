import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../data/registros.txt');

export function readRegisters() {

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err) return reject(err);

            const linhas = data
                .split('\n')
                .filter(Boolean)
                .map(linha => JSON.parse(linha));

            resolve(linhas);
        })

    });

}