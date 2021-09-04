import express from 'express';
import mongoose from 'mongoose';
import cards from './dbcards.js';
import cors from 'cors'; 
const connection_url="mongodb+srv://raja:raja3381@cluster0.n9lt5.mongodb.net/tinderdb?retryWrites=true&w=majority"

//App Configurations 
const app = express();
app.use(cors());
const port = process.env.PORT|| 9001;
//Middlewares
app.use(express.json())
//DB Configurate
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
//API endpoints
app.get('/',(req,res)=>res.status(200).send("MW$M stack"));
app.post('/tinder/card',(req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/card',(req,res)=>{
    const dbCard = req.body;
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
//Listener
app.listen(port,()=>console.log(`listening on port ::${port}`))