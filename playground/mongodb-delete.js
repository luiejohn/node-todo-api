// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
        // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
        //     console.log(result);
        // });
    //deleteOne
        // db.collection('Todos').deleteOne({text:'Stray the cat'}).then((result)=>{
        //     console.log(result);
        // });
    //findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        //     console.log(result);
        // });

    //Challenge
    // db.collection('Users').deleteMany({name: 'Luie Lumanta'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5be92790195ef6d1a7095dee')}).then((result)=>{
        console.log(result);
    });

    // db.close();
});