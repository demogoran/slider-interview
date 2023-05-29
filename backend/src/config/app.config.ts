import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  post: process.env.SERVER_PORT || 3000,
}));
