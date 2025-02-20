import express,{Request,Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log('Successfully Connected to Database');
})

const app = express()
app.use(express.json());
app.use(cors());

app.get('/test',async (req:Request,res:Response)=>{
  res.json({message:"Hello!"})
})

app.listen(8080,()=>{
    console.log(`Server Started on Port ${8080}`);
})