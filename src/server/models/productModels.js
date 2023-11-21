const mongoose = require('mongoose')
const bcryptjs= require ('bcryptjs')
const jwt = require('jsonwebtoken')

const productSchema = new mongoose.Schema(
    {
        nombreP:{
            type:String,
            unique:true,
        },
        categoria:{
            type:String,
        },
        precio:{
            type:Number,
            
        },
        region:{
            type:String,
           
        },
        archivoInput:{
            type: String,
        }
        

    }
)






const Product =
module.exports = mongoose.model('Product',productSchema)