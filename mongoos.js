const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
const main = async () =>{
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"realme k21",price:9000});
    let result = await data.save();
    console.log(result)

}

const updateDb = async ()=>{
    const Products = mongoose.model('products',ProductSchema)
    let data = await Products.updateOne({name:'realme k21'},{$set:{price:18000}})
    console.log(data)

}

const deleteDb = async ()=>{
    const Products = mongoose.model('products',ProductSchema)
    let data = await Products.deleteOne({price:9000})
    console.log(data)
}
const findDb = async ()=>{
    const Products = mongoose.model('products',ProductSchema)
    let data = await Products.find()
    console.log(data)
} 
findDb();