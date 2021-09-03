import redis from 'redis';
import {RateLimiterRedis} from 'rate-limiter-flexible';

const redisClient = redis.createClient();

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'rateLimiter',
    points: 5,//quantas requisições por IP
    duration: 5,//segundos
  });
  

  export default async function customLimiter(req, res, next) {
    try{
      await limiter.consume(req.ip);
      return next();
    }catch(err){
      return response.status(429).json({message: 'Too many requests', code:429})
    }
  }

