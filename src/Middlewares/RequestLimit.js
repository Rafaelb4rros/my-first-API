import moment from 'moment';
import redis from 'redis';

const redisClient = redis.createClient();

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'rateLimiter',
    points: 5,//quantas requisições por IP
    duration: 5,//segundos
  });
  

  export default async function rateTimiter(req, res, next) {
    try{
      await limiter.consume(request.ip);
      return next();
    }catch(err){
      return response.status(429).json({message: 'Too many requests', code:429})
    }
  }

