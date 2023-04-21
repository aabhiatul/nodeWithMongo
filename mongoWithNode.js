const dbConnect = require('./mongodb')

// dbConnect().then((resp)=>{
//     resp.find().toArray().then(data => {
//         console.log(data)
//     })
// })

const main = async () => {
    let data = await dbConnect()
    console.log(await data.find().toArray())
}
// getData()
main()