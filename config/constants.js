module.exports = {
  SERVICE_CONFIG: {
    TOKEN_EXPIRED_TIME: process.env.TOKEN_EXPIRED_TIME || 60 * 60,
    SECRET_KEY: process.env.JWT_KEY || "xzcvzxczxzxczasdasd",
    SERVICE_PORT: process.env.SERVICE_PORT || 3000,
  },

  DB_CONFIG: {
    DB_USERNAME: process.env.DB_USERNAME || "khangtc",
    DB_PASSWORD: process.env.DB_PASSWORD || "yr0xeAO4xMOQchKv",
    CLUSTER: process.env.CLUSTER || "web68.g9e4tgp.mongodb.net",
    DB_NAME: process.env.DB_NAME || "test",
    COLLECTION_USER: process.env.COLLECTION_USER || "users",
    COLLECTION_ROLE: process.env.COLLECTION_ROLE || "roles",
  },
};
