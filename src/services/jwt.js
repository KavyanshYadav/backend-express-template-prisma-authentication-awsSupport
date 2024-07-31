const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your-secret-key';


function generateSessionToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '5h' }); // Token expires in 1 hour

}
function generateAuthToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1000h' }); // Token expires in 1 hour

}

function verifyToken(token) {
    return jwt.verify(token, secretKey);
}

module.exports = {
    generateAuthToken,
    generateSessionToken,
    verifyToken
}