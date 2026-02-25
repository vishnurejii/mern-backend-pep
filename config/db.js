import mongoose, { Schema } from"mongoose"
const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/merndb")

}
export default dbConnect

// import mongoose from "mongoose";

// const dbConnect=async()=>{
//     await mongoose.connect("mongodb://localhost:27017/mern")
// }

// export default dbConnect

// import dbConnect from "../config/db.js"
// import mongoose from "mongoose";
// import productModel from "../models/userModel";

// const productSchema=new mongoose.Schema{
//     name:{type:"String",required:"true"},
//     price:{type:"String",required:"true"}


// }

// productModel=mongoose.model("products",productSchema)

// export default productModel

// import productModel from "../models/userModel.js";

// const addProduct=async(req,res)=>{
//     const body=req.body
//     const result=await productModel.create(req.body)
//     res.json(result)
// }

// const showProduct=async(req,res)=>{
//     const result=await productModel.find()
//     res.json(result)
// }

// const deleteProduct=async(req,res)=>{
//     const id=req.params.id
//     const result=await productModel.findByIdAndDelete(id)
//     res.json(result)
// }

// export default{addProduct,showProduct,deleteProduct}

// import {addProduct,showProduct,deleteProduct} from "../controllers/userController.js"
// import express from "express"

// const router=express.router()

// router.get("/",showUser)
// router.post("/",addProduct)
// export default router

// import router from "router"
// import express from "express"

// const app=express()

// app.use(express.json())

// app.use("/api/users".router)

// app.listen(8080,()=>{
//     console.log("server listening")
// })


// import mongoose from "mongoose"

// const dbconnet=async()=>{
//    await mongoose.connect("mongoose::localhost://27017/mern")
// }

// export dbConnect()

// import dbconnet from "../config/db.js"

// const productSchema=new mongoose Schema{
//     name:{type:"string"},
//     email:{type:"string",required:true}
// }

// const productModel=mongoose.model("products",productSchema)

// export productModel

// import productModel from "../model/usermodel.js"
// import { Router } from "express"

// const addProduct=async(req,res)=>{
//     const body=req.body
//     const result= await productModel.create(req.body)
//     res.json(result)
// }

// const showProduct=async(req,res)=>{
//     const result=await productModel.find()
//     res.json(result)

// }
// const sdeleteProduct=async(req,res)=>{
//     const result=await productModel.findAndDeleteByID
//     res.json(result)

// }

// Router=express.Router()
// Router.post("/",adduser)
// Router.get("/",showuser)

// const app=express()
// app.use(express.json())
// app.use("api/users",router)

// const connection=async(req,res)=>{
//     await app.listen(8080)
// }

// connection()