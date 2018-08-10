const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://root:example@db:27017', (err, client) => {
  if (err) return console.log(err);
  db = client.db('todo-list'); // whatever your database name is
  //app.listen(27017, () => {
    console.log('listening on 27017')
  //})
})

module.exports = db;
