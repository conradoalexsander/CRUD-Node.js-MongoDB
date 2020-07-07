import express from 'express';
import mongoose from 'mongoose'
import studentRouter from './routes/studentRoutes.js'
require('dotenv').config();



const app = express();
app.use(express.json());
(async () => {
  try {
    await mongoose.connect(`
    mongodb+srv://
    ${process.env.USER}:${process.env.PASSWORD}@
    ${process.env.CLUSTER}-oclyh.gcp.mongodb.net/
    ${process.env.DB}?
    retryWrites=true&w=majority
    `, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() =>
      console.log("Conectado ao MongoDB Atlas")
    ).catch(err => console.log(err))

  } catch (error) {
    console.log(error)
  }
})();




app.use(studentRouter);

app.listen(3333, () => console.log('🌟 API has started, port: 3333'));