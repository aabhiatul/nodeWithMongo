const express = require("express");
const dbdata = require("./mongodb.js");
const bodyParser = require("body-parser");
const mongodb = require('mongodb');

app = express();

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());
app.use(express.json());

app.get("/fetchData", async (req, res) => {
  let data = await dbdata();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/getInfo", async (req, res) => {
  let infoObj = req.body;
  let data = await dbdata();
  data = await data.insertOne(infoObj);
  console.log(data);
  if (data.acknowledged === true) {
    res.send("submitted successfully");
  } else {
    res.send("denial");
  }
});

app.put("/updateData/:name", async (req, res) => {
  let dbData = await dbdata();
  let result = await dbData.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  if (result.acknowledged === true) {
    res.send("updated sucessfully");
  } else {
    res.send("not updated!");
  }
  console.log("updated!");
});

app.delete('/deleteData/:id',async(req,res)=>{
    let dbData = await dbdata()
    let result = await dbData.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    if(result.acknowledged === true){
        res.send('record has deleted!')
    }else{
        res.send('somthing went wrong')
    }
    console.log(req.params.id)
})

app.listen(3000, () => {
  console.log("app is running on port 8000");
});
