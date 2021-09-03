import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET

export const sign = tokenfactory => jwt.sign(tokenfactory, secret, {expiresIn: 1800})
export const verify = token => jwt.verify(token, secret);