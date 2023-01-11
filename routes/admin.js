var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      Name:"Ziya",
      Price:"45$",
      Des:"ermgioejiwejij",
      Image:"https://ziyastores.com/wp-content/uploads/2022/11/Animal-Horse-Hoodie-Men-Sweatshirt-Brand-Winter-Thin-Hooded-Pullover-Harajuku-Casual-Men-Women-Tracksuits-Hoody_9d0612c8-987a-4912-aa06-cdff88623ab4.png"
    },
    {
      Name:"White rayon  ",
      Price:"50$",
      Des:"",
      Image:"https://cdn.shopify.com/s/files/1/0623/8850/2700/products/WM0033_700x.png?v=1654782386"
    },
    {
      Name:"Fancy Shirt",
      Price:"76$",
      Des:"",
      Image:"https://images.meesho.com/images/products/50080135/is4ku_512.webp"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-products',(req,res)=>{
  res.render('admin/add-products')
})
router.post('/add-products',(req,res)=>{
  console.log('successfully inserted');
})
module.exports = router;
