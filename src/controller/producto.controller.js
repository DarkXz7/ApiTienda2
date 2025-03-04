const modelosProducto = require('../models/producto')

exports.consultar = async(req,res)=>{
    let listaProducto = await modeloProducto.find({});
    if(listaProducto){
        res.json(listaProducto);
    }else{
        res.json({"error":"hubo un error"})
    }
}

exports.editar = async(req,res)=>{

}
exports.eliminar = async(req,res)=>{
    
}
exports.registrar = async(req,res)=>{
    
}
