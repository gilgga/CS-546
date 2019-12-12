const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");
const mongoConfig = settings.mongoConfig;

let _connection;
let _db;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl, { useNewUrlParser: true } );
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
