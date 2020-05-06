`--unhandled-rejections=strict`

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const errorHandler = require('./middleware/errorhandler');
const postRoutes = require('./routes/post')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passportJWT = require('./middleware/passport') ();



dotenv.config()
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(passportJWT.initialize())

app.use('/api/post',postRoutes)


mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },console.log('connected to the database')
    )

mongoose.connection.on('error',() =>{

    throw new Error('unable to connect to the database')
})


const PORT = 8000;


app.use(errorHandler);

app.listen(PORT,()=>{

    console.log(`listen on port ${PORT}`);
})
