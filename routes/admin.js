var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('admin/view-products',{admin:true,products})
  })
  
});
router.get('/add-products',(req,res)=>{
  res.render('admin/add-products',{admin:true})
})
router.post('/add-products',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image);
  productHelpers.addProducts(req.body,(_id)=>{
    let image = req.files.image
    image.mv('./public/product-images/'+_id+'.jpg',(err,done)=>{
      if(!err) res.render('admin/add-products')
      else console.log(err);
    })
    
  })
})
module.exports = router;
