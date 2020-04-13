import bycrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config';

const secret = config.SECRET;

const Helpers = {
  hashPassword(password) {
    const salt = bycrpt.genSaltSync(10);
    const hash = bycrpt.hashSync(password, salt);
    if (hash && salt) {
      return { hash, salt };
    }
    return false;
  },

  verifyPassword(password, hash) {
    return bycrpt.compareSync(password, hash);
  },

  generateToken(id, email) {
    return jwt.sign({ userId: id, email }, secret, { expiresIn: '24h' });
  },

  decodeToken(token) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return error;
    }
  },

  comparePassword(password, hash) {
    const validPassword = Helpers.verifyPassword(password, hash);
    if (validPassword) {
      return true;
    }
    return false;
  },
};

export default Helpers;
