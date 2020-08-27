const mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.set('useFindAndModify', false);
  mongoose.set('debug', true);

  mongoose
    .connect(
      'mongodb://127.0.0.1:27017/graphql-ddd',
      {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection is open');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0);
    });
  });
};
