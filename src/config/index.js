import devEnv from './development';
import prodEnv from './production';
import testEnv from './test';

const { NODE_ENV } = process.env;

export default {
  test: testEnv,
  production: prodEnv,
  development: devEnv,
}[NODE_ENV || 'development'];
