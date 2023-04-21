const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbConnect = async () =>{
    let result = await client.connect();
   let db = result.db('e-comm')
   return db.collection('products')
//    let collection = db.collection('products')
//    console.log(await collection.find().toArray())
}
module.exports = dbConnect;