const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://7h70760:ulvi2023@cluster0.u5vwpgw.mongodb.net/").then(()=>{
    console.log("DB Connected")
})

const cardSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
})
const cardModel = mongoose.model("cardModel", cardSchema)

app.get("/", async (req,res)=>{
    const data = await cardModel.find()
    if(!data){
        res.status(404).send("error")
    }
    res.status(200).send(data)
})

app.post("/", async (req,res)=>{
    const newCard = new cardModel({
        ...req.body
    })
    await newCard.save()
    res.send(newCard)
})

app.get("/:id", async (req,res)=>{
    const {id}= req.params
    const target = await cardModel.findById(id)
    res.send(target) 
})

app.delete("/:id", async (req,res)=>{
    const {id}= req.params
    const target = await cardModel.findByIdAndDelete(id)
    res.send("Item Silindi")
})

app.listen(8080, ()=>{
    console.log("App Running");
})