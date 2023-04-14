const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const getData = async () =>{
    let result = await client.connect();
   let db = result.db('e-comm')
   let collection = db.collection('products')
   console.log(await collection.find().toArray())
}
getData()