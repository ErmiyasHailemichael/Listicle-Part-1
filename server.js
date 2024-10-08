// import express from 'express'

const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + 'public', 'index.html'))
})

// 404 
app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
});
