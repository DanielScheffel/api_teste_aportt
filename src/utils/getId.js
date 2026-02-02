export function  getClientIp(req) {

    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    if (ip.includes(',')) {
        ip = ip.split(',')[0];
    }

    if (ip.startsWith('::ffff:')) {
        ip = ip.replace('::ffff:', '');
    }

    if (ip === '::1') {
        ip = '127.0.0.1';
    }

    return ip;
}