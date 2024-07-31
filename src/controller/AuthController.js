const bcrypt = require('bcryptjs/dist/bcrypt');
const prisma = require('../models/PrismaClient');
const { generateAuthToken } = require('../services/jwt');


//login

const GenerateToken = async(req,res) =>{

    let email = req.body.email
    let pass  = req.body.password

    const user = await prisma.user.findUnique({where:{email}})
    console.log(user)
    
    if(user && bcrypt.compare(req.body.pasword,user.password)){

    const authtoken = generateAuthToken({id:user.id,email:user.email})

    res.status(200).json({
        status:"login succesfull",
        authToken:authtoken
    })

}else{
    res.status(400).json({
        status:"email or password not found"
    })
}

}


module.exports = {GenerateToken}