const { sign, verify } = require('jsonwebtoken');

module.exports.generateToken = payload => sign(payload, process.env.JWT_SECRET);

module.exports.verifyToken = token => verify(token, process.env.JWT_SECRET);