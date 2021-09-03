import redis from 'redis';
import {RateLimiterRedis} from 'rate-limiter-flexible';

const redisClient = redis.createClient({
  host: 'localhost',
  port:process.env.PORT,
  password: undefined,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiter',
  points: 3,
  duration: 3,
});

export default async function rateTimiter(req, res, next) {
  try{
    await limiter.consume(request.ip);
    return next();
  }catch(err){
    return response.status(429).json({message: 'Too many requests', code:429})
  }
}