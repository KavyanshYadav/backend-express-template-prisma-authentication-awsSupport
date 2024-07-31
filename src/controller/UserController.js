const bcrypt = require("bcryptjs/dist/bcrypt")
const prisma = require("../models/PrismaClient")


const CreateUser = async(req,res)=>{
    try {
        console.log("asdsa")

        const {name,email,password} = req.body

        const hashpassword = await bcrypt.hash(password,10)


        const user =  await prisma.user.create({
            data:{
                name:name,
                email:email,
                password:hashpassword
            }
        })
        console.log("fetch")

        res.status(200).json({status:"success user created"})
    } catch (error) {
        
    }
}



module.exports = {CreateUser}