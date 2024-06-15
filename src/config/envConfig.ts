import dotenv from 'dotenv';
dotenv.config();

class EnvConfigurations {
  static PORT = process.env.PORT || 7000;
  static MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || '';
}

export { EnvConfigurations };
