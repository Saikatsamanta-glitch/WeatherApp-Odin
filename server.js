const express = require('express');
const app =express();
const port = 5000 || process.env.PORT;
const bodyParser = require('body-parser');
const axios = require('axios')
// xmphttprequest ---> fetch ---> axios




app.set('view engine','ejs');
// views folder


//servring an html tag

// node js will start handling json and objs
app.use(bodyParser())
// server public folder | js, css, html, video and audio
app.use(express.static('public'))

//home route / 
app.get('/',(req,res)=>{
    res.render('index.ejs',{"data":null})
}) 

// post route to get city
app.post('/city',async(req,res)=>{
    const {city} =req.body;
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6698a520438f6a90c6799c68cd863317`)
    console.log(response.data.main)
    res.render('index.ejs',{"data":response.data.main})
})


app.listen(port,()=>{
    console.log(`Connected to port ${port} 🚀`)
})

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6698a520438f6a90c6799c68cd863317