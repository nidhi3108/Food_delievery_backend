const dotenv = require('dotenv')
const express = require("express")

const app = express();
const cors = require('cors')
const port = process.env.port || 8080;
dotenv.config({path: './.env'})
const adminrouter = require('./router/adminrouter')
const userrouter = require('./router/userrouter')
const staffrouter = require('./router/staffrouter')

app.use(express.json());
app.use(cors({origin:"*"}))


app.use('/admin', adminrouter)
app.use('/user', userrouter)
app.use('/staff', staffrouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})