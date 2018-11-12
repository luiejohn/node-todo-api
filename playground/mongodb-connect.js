// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    // db.collection('Users').insertOne({
    //     name: 'Luie Lumanta',
    //     email: '123asdsaf@gmail.com'
    // }, (err, res)=>{
    //     if(err){
    //         return console.log('Unable to insert todo');
    //     }
    //     else {
    //         console.log(JSON.stringify(res.ops, undefined, 2));
    //     }
    // })

    db.close();
});