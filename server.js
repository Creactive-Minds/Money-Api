const express  = require("express")
const { AggregationCursor } = require("mongodb")
//const pathcomp = require("express-static")
const path = require("path/win32")
const app = express()
const myapp = app
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://ntecleopas:ntecleopas.091334@cluster0.9q7ogfd.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri,{useNewUrlParser: true})

app.get("/test",(req,res)=>{
    client.connect(err=>{
        const collection = client.db("test").collection("users");
            collection.find().toArray((error,documents) => {
                if (error){
                    throw error;
            }
            res.send(documents)
            })
        client.close()
    })
})  

//app.use(pathcomp(__dirname.join("views")))
/*app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")*/



const port = 3000
const routes = require("./Routes/routes")

app.use(express.json())

app.use("/api", routes, express.static("views"))
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Your server is running on port ${port}`)
})

//app.use("/api",routes)
module.exports = myapp