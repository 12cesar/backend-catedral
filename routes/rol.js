const { response,request } = require("express");
const { Router } = require("express");



const router = Router();

router.get('/',(req=request,res=response)=>{
    res.json({
        ok:true
    })
});
router.get('/:id',(req=request,res=response)=>{
    const {id} = req.params;
    res.json({
        ok:true,
        id
    })
});
router.post('/',(req=request,res=response)=>{
    const {nombre, apellido,edad} = req.body;
    const {manzana,peras} = {
        manzana:'20',
        peras:'50'
    }
    res.json({
        ok:true              
    });
});


module.exports = router;