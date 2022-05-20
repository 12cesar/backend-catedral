const { Router } = require("express");
const { postNoticias } = require("../controllers/noticias");


const router = Router();



router.post('/',postNoticias);


module.exports = router;
