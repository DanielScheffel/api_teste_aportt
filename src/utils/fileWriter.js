import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/registros.txt');

export function writeRegister(data) {

    const now = new Date();

  const date = now.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  const time = now.toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  const registro = {
    date,
    time,
    latitude: data.latitude,
    longitude: data.longitude,
    ip: data.ip,
    foto: data.imagePath
  };

  fs.appendFile(
    filePath,
    JSON.stringify(registro) + '\n',
    (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo:', err);
      }
    }
  );
}
