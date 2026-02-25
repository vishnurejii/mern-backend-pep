import productModel  from "../models/productModel.js";
const addProducts=async(req,res)=>{

    const body=req.body
  
    const result=await productModel.create(req.body)
    res.json(result)

}

const showProducts=async(req,res)=>{
    const result=await productModel.find()
    res.json(result)

}

const deleteProducts=async(req,res)=>{
    const id=req.params.id
    const result=await productModel.findByIdAndDelete(id)
    res.json(result)

}

const updateProducts=async(req,res)=>{
    const id=req.params.id
    const result=await productModel.findByIdAndUpdate(id)
    res.json(result)

}


export{addProducts,showProducts,deleteProducts,updateProducts}