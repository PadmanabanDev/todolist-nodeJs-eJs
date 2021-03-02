const express =  require("express");
const bodyParser= require("body-parser");
const date =require(__dirname+"/date.js");




const app = express();

const items=[ '2km Running','Coding practice'];
const workItems=[];


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
  let day = date.getDate();
  
res.render("lists",{listTitle:day,newListItems:items})

});

  app.post('/',function(req,res){

    let item=req.body.newItem;

    

      if (req.body.list === "Work"){
          workItems.push(item);
          res.redirect("/Work")
      }else{
        items.push(item);
        res.redirect("/")
      }
    
    
   });

   app.get('/Work',function(req,res){
       res.render("lists",{listTitle:"Work List", newListItems:workItems})
   })

   app.get("/about",(req,res)=>{
       res.render("about");
   });
    
app.listen(8080,()=>
{
    console.log("server is Running on Port:8080");
})
//    app.post("/work",(req,res)=>{
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect('/work')
//    })
