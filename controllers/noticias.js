const { request,response } = require("express");


const postNoticias =(req=request,res=response)=>{
    const {...data} = req.body;
    
    res.json({
        ok:true,
        data
    })
}

module.exports = {
    postNoticias
}