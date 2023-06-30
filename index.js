const express = require("express")
const router = require("./router")


const app= express()



app.listen(3000,()=>console.log("server is happy now ^_^ "))

app.use(express.json())
app.use("/api/v1/",router)
