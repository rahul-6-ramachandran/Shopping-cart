const { ObjectId } = require('mongodb')
const { PRODUCT_COLLECTIONS } = require('../config/collections')
var db = require('../config/connection')
var collection = require('../config/collections')
module.exports={
    addProducts:(products,callback)=>{
        // console.log(product);
        db.get().collection('products').insertOne(products).then((data)=>{
            callback(data.insertedId)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products = await db.get().collection(collection.PRODUCT_COLLECTIONS).find().toArray()
            resolve(products)
        })
    }
}