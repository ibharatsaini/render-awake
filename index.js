const express = require('express')


const app = express()



app.use("/",(req,res)=>{
    setInterval(()=>{
        fetch('https://movie-booking-yj2w.onrender.com/')
    },20000)
    res.status(200).json({
        message:`Up and running`
    })
})

app.listen(process.env.PORT || '8080', ()=>{
     console.log(`Server running on port`,process.env.PORT || '8080')
})



module.exports = app