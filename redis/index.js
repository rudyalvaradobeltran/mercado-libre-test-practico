const Redis = require("ioredis");

let client = new Redis(process.env.NEXT_PUBLIC_REDIS_CONNECTION);

module.exports = { client };
