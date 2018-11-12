// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5be92470195ef6d1a7095d4b')
    }, {
        $set:{
            text: 'Stray our cat yupi'
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })

    // db.close();
});