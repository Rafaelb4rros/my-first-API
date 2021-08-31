import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET

export const sign = tokenfactory => jwt.sign(tokenfactory, secret, {expiresIn: 8600})
export const verify = token => jwt.verify(token, secret);