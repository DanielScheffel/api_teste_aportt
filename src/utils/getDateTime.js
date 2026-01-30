export function getDate() {
    const agora = new Date();

    const date = agora.toLocaleDateString('pt-BR'); // -> 29/01/2026
    const time = agora.toLocaleTimeString('pt-BR'); // -> 21:43:10

    return `${date} ${time}`;
}