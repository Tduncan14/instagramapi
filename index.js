const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const errorHandler = require('./middleware/errorhandler');
const postRoutes = require('./routes/post')


const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/post',postRoutes)


const PORT = 8000;


app.use(errorHandler);

app.listen(PORT,()=>{

    console.log(`listen on port ${PORT}`);
})
