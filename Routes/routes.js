const path = require("path/win32")

const { join } = require("path")

express = require("express")
router = express.Router()

module.exports = router

router.param(function(param,option){
    return function(req,res,next,val){
        if (val===option){
            next()
        }else{
            res.sendStatus(403)
        }
    }
})

router.param("id","1336")

router.get("/users/:id",function(req,res){
    cleopas={
        "Accountname": "Cleopas",
        "AccountNumber": 123455
    }
    res.send(cleopas)
})

router.get("/",(req,res)=>{
    res.send("This is the response page for the api")
})

router.get("/users",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"))
})