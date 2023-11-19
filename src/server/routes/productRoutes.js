const express = require('express')
const router = express.Router()
const productsModel = require ('../models/productModels')


router.get('/',
    async(request, response)=>{

        try {
            const productos = await productsModel.find()

            if (productos.length === 0) {
                return response.
                status(404).
                json({
                    success: false,
                    msg:"No hay productos disponibles"
                })
            }

            response
                .status(200)
                .json({
                    "success": true, 
                    "results":productos
                })

        } catch (error) {
            response
                .status(500)
                .json({
                    success: false,
                    msg: "Error interno del servidor"
                })
        }
})


router.get('/:nombreP',
    async(request, response)=>{

        try {
            //traer el parametro id de la uri
            
            const nombrep = request.params.nombreP 
            
            if(!moongose.Types.ObjectId.isValid(nombrep)){
                response
                .status(500)
                .json({
                    success: false,
                    msg: "Producto no registrado"
                })
            }else{
                const selected_nombreP = await citasModel.findBynombreP(nombrep)

                if (!selected_nombreP) {
                    return response
                        .status(404)
                        .json({
                            success: false,
                            msg:`No se encuentra el producto con nombre: ${nombrep}`
                        })
                    
                }
                else{
                    response
                        .status(200)
                        .json({
                            "success": true, 
                            "results": selected_nombreP
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


router.post('/register', 
            async(req, res)=>{
                const {nombreP, categoria, precio, region, archivoInput} = req.body;
                try {
                    const product = 
                    await productsModel.create({
                        nombreP, 
                        categoria, 
                        precio, 
                        region, 
                        archivoInput
                    })
            res
                .status(201)
                .json({
                    sucess: true,
                    msg: "producto creado exitosamente",
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
        const productoId= request.params.id

        if(!moongose.Types.ObjectId.isValid(productoId)){
            response
            .status(500)
            .json({
                success: false,
                msg: "Id invalido"
            })
        }else{
            const updProducto = await productsModel.findByIdAndUpdate(
                productoId, 
                request.body,
                {
                    new:true
                }  
            )

            if (!updProducto) {
                return response
                    .status(404)
                    .json({
                        success: false,
                        msg:`No se encuentra el producto con id: ${productoId}`
                    })
                
            }
            else{
                response
                .status(200)
                .json({
                    "success": true, 
                    "results": updProducto
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

        const productoId= request.params.id
        if(!moongose.Types.ObjectId.isValid(productoId)){
            response
            .status(500)
            .json({
                success: false,
                msg: "Id invalido"
            })
        }else{
           const delProducto = await productsModel.findByIdAndDelete(productoId)

           if (!delProducto) {
                return response
                    .status(404)
                    .json({
                        success: false,
                        msg:`No se encuentra el producto con id: ${productoId}`
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
                    msg: "Error interno del servidor"
                })
    }
})

            module.exports = router