// CRUD

const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    db.collection('tasks')
      .updateMany(
        {
          completed: 'true',
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
)
