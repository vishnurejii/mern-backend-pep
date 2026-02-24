import userModel  from "../models/userModel.js";
import bcrypt from "bcrypt"

const addUser=async(req,res)=>{

    const body=req.body
    const hashPassword=await bcrypt.hash(body.password, 10)
    body.password=hashPassword
    const result=await userModel.create(req.body)
    res.json(result)

}

const showUsers=async(req,res)=>{
    const result=await userModel.find()
    res.json(result)

}

const deleteUser=async(req,res)=>{
    const id=req.params.id
    const result=await userModel.findByIdAndDelete(id)
    res.json(result)

}

const login=async(req,res)=>{
    const{email,password}=req.body
    const found=await userModel.findOne({email})

    if(found){
        const checkPassword=await bcrypt.compare(password,found.password)
        if(checkPassword){
            res.status(200).json({message:"success"})
        }else{
            res.status(401).json({message:"user not found"})
        }
    }
}
export{addUser,showUsers,deleteUser,login}