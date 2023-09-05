const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`API Listening On Port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is API Runing')
});

app.get('about', (req, res) =>{
    res.send('about page ')
})

module.exports = app

