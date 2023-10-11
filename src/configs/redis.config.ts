import Ioredis from 'ioredis';

import {config} from "dotenv";

config();

export const io_redis = new Ioredis(process.env.REDIS_URL);
