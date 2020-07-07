import express from 'express';
import mongoose from 'mongoose'
import studentRouter from './routes/studentRoutes.js'
// require('dotenv').config();

// 'mongodb+srv://'
//     +process.env.USER+
//     ':'
//     +process.env.PASSWORD+
//     '@'
//     +process.env.CLUSTER+
//     '-oclyh.gcp.mongodb.net/'+process.env.DB+'?retryWrites=true&w=majority', 

const app = express();
app.use(express.json());
(async () => {
  try {
    await mongoose.connect('mongodb://'+
    process.env.MONGODB_ATLAS_USER+
    ':' + 
    process.env.PASSWORD+
    '@fullstackcluster-shard-00-00-oclyh.gcp.mongodb.net:27017,'+
    'fullstackcluster-shard-00-01-oclyh.gcp.mongodb.net:27017,'+
    'fullstackcluster-shard-00-02-oclyh.gcp.mongodb.net:27017/'+
    process.env.DB+
    '?ssl=true&replicaSet=FullStackCluster-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() =>
      console.log("Conectado ao MongoDB Atlas, deploy no heroku")
    ).catch(err => console.log(err))

  } catch (error) {
    console.log(error)
  }
})();




app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('🌟 API has started, port: 3333'));