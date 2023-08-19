const { DB_CONFIG } = require("../config/constants");

const users = [
  {
    username: "admin",
    password: "MindX@2022",
  },
  {
    username: "alice",
    password: "MindX@2022",
  },
];

module.exports = {
  async up(db, client) {
    const usersCollection = await db.createCollection(
      DB_CONFIG.COLLECTION_USER
    );
    await usersCollection.createIndex({ email: 1 }, { unique: true });
    await usersCollection.insertMany(users);
  },

  async down(db, client) {
    await db.collection(DB_CONFIG.COLLECTION_USER).drop();
  },
};
