require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const helmet=require('helmet');
const path=require('path');
const shortid=require('shortid')
const urlRoutes=require('./routes/urlRoutes');

const app=express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.error('MongoDB connection error:',err.stack))
app.use('/api/urls',urlRoutes);

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>(`Server is running on port ${PORT}`))