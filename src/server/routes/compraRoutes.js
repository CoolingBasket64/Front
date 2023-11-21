const express = require('express')
const router = express.Router()
const moongose = require ('mongoose')
const compraModel = require ('../models/compraModels')



router.get('/',
    async(request, response)=>{

        try {
            const compra = await compraModel.find()

            if (compra.length === 0) {
                return response.
                status(404).
                json({
                    success: false,
                    msg:"No hay pedidos disponibles"
                })
            }

            response
                .status(200)
                .json({
                    "success": true, 
                    "results":compra
                })

        } catch (error) {
            response
                .status(500)
                .json({
                    success: false,
                    msg: error.message
                })
        }
})

router.post('/register', 
            async(req, res)=>{
                const {nombreP, nombre, apellido, correo, numero, direccion} = req.body;
                try {
                    const compra = 
                    await compraModel.create({
                        nombreP, 
                        nombre, 
                        apellido, 
                        correo, 
                        numero, 
                        direccion
                    })
            res
                .status(201)
                .json({
                    sucess: true,
                    msg: "comprar registrada exitosamente",
                })
                } catch (error) {
                    res
                        .status(400)
                        .json({
                            sucess: false,
                            message: error.message
                        })
                    
                }

            })

            router.put('/:id',
            async (request, response)=>{
               try {
                   const compraId= request.params.id
           
                   if(!moongose.Types.ObjectId.isValid(compraId)){
                       response
                       .status(500)
                       .json({
                           success: false,
                           msg: "Id invalido"
                       })
                   }else{
                       const updateCompra = await compraModel.findByIdAndUpdate(
                           compraId, 
                           request.body,
                           {
                               new:true
                           }  
                       )
           
                       if (!updateCompra) {
                           return response
                               .status(404)
                               .json({
                                   success: false,
                                   msg:`No se encuentra el pedido con id: ${compraId}`
                               })
                           
                       }
                       else{
                           response
                           .status(200)
                           .json({
                               "success": true, 
                               "results": updateCompra
                           })
                       }
                   }
                   
               } catch (error) {
                   response
                           .status(500)
                           .json({
                               success: false,
                               msg: "Error interno del servidor"
                           })   
               }
           })
           
           
           
           router.delete('/:id',
              async (request, response)=>{
           
               try {
           
                   const compraId= request.params.id
                   if(!moongose.Types.ObjectId.isValid(compraId)){
                       response
                       .status(500)
                       .json({
                           success: false,
                           msg: "Id invalido"
                       })
                   }else{
                      const delCompra = await compraModel.findByIdAndDelete(compraId)
           
                      if (!delCompra) {
                           return response
                               .status(404)
                               .json({
                                   success: false,
                                   msg:`No se encuentra el pedido con id: ${compraId}`
                               })
                      }else{
                       response
                           .status(200)
                           .json({
                               "success": true, 
                               "results":[]
                           })
                      }
                   }
                   
               } catch (error) {
                   response
                           .status(500)
                           .json({
                               success: false,
                               msg: error.message
                           })
               }
           })


module.exports = router