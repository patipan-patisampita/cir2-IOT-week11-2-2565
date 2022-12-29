const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/student',(req,res)=>{
    res.send('Student Page')
})

app.get('/admin',(req,res)=>{
    res.send('Admin Page')
})


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})