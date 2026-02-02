# 📦 Backend — Sistema de Registro de Ponto

Este backend foi desenvolvido em **Node.js com Express** e tem como objetivo registrar pontos eletrônicos contendo:

- 📍 **Localização geográfica (latitude e longitude)**
- 📷 **Imagem capturada pela câmera**
- 🕒 **Data e hora do registro**
- 🌐 **IP do cliente**

Os registros são persistidos em um arquivo `.txt`, simulando um mecanismo simples de armazenamento, conforme proposto no desafio técnico.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Multer** — upload de arquivos
- **Cors**
- **FS (File System)** — leitura e escrita de arquivos
- **ES Modules**

---

## 📁 Estrutura de Pastas

```txt
src/
├── controllers/
│   └── registerController.js
├── routes/
│   └── registerRoute.js
├── utils/
│   └── fileWriter.js
├── data/
│   └── registros.txt
├── uploads/
│   └── (imagens enviadas)
├── app.js
└── server.js
```
---

## 📝 Observações

- A persistência em arquivo foi escolhida para manter a simplicidade do escopo.
- A estrutura foi organizada para facilitar futuras evoluções, como uso de banco de dados ou autenticação.
- O backend está preparado para integração direta com aplicações frontend.