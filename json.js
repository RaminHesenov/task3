const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const Router = require("./routing/user.routing")

app.use('/',Router)



const PORT = 8000

app.listen(PORT,console.log(`Server Runnig: http://localhost: ${PORT}`))