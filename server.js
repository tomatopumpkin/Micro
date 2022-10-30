const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//API Config
const { getUser } = require('./API/users');
app.use('/users', getUser);



// PORT
const PORT = process.env.PORT || 4000 ;
app.get('/' , (req,res) => {
    res.send("Server is running")
});

app.listen(PORT , () => {
    console.log(`Server listening on ${PORT}`);
});

