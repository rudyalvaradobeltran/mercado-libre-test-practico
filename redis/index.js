const Redis = require("ioredis");

let client = new Redis(process.env.REDIS_CONNECTION);

module.exports = { client };
