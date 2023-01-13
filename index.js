const express =require("express");
const app=express();
const mysql=require("mysql");
const cors= require("cors");
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database: "bookdata"
});
app.post("/create",(req,resp)=>{
    const isbn=req.body.isbn
    const title=req.body.title
    const author=req.body.author

    db.query("insert into bookstore (isbn,title,author) values(?,?,?)",[isbn,title,author],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            resp.send("values inserted")
        }

    })
    app.get("/books",(req,resp)=>{
        db.query("select * from bookstore",(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                resp.send(result);
            }
        })
    })
})
app.listen(4001,()=>{console.log("running")});