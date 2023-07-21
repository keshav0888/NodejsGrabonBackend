const mongooes = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongooes.connect(
      "mongodb+srv://keshav:keshavadmin@cluster0.o3hsffw.mongodb.net/mycontacts-backends?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      "database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;
