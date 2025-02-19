const PORT = 8000;

const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

const axios = require("axios");

require("dotenv").config();

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/books", (req, res) => {


  const options ={
    method:'GET' ,
    url : 'https://example-data.draftbit.com/books?_limit=10'

  }
  axios.request(options).then((response)=>{
    res.json(response.data);
    
  }).catch((error)=>{
    console.log(error);
  })
});



app.listen(8000, () => console.log(`backend server running on port ${PORT}`));
