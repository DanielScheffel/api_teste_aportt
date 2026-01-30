export function  getClientIp(req) {
    let ip = req.ip;

    // Trata IPv6 com prefixo ::ffff:
    if(ip.includes('::ffff:')) {
        ip = ip.replace('::ffff:', '');
    }

    return ip;
}