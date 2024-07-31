const express = require('express');
const dotenv = require('dotenv');
const UserRouter = require('./src/routes/UserRoute');
const prisma = require('./src/models/PrismaClient');
const AuthRouter = require('./src/routes/AuthRoute');

dotenv.config();

const app = express()

app.use(express.json())

async function ma(){

    await prisma.$connect()
    console.log("prisma connected to mongodb")

    
   
}
ma()

app.get("/",(req,res)=>{
    res.json({name:"heelo"})
})

app.use("/api/user",UserRouter)
app.use("/api/auth",AuthRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});