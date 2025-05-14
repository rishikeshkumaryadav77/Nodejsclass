var express = require("express")
var app = express()

app.get("/qu", (req, res) =>{
  var fetchData = fetch("https://fakestoreapi.com/products");
  var data = fetchData.json();

  // res.send(res.query)
  if(req.query.cat =="m"){
    var filterdata = data.filter((val) =>{
      val["category"] = "men's clothing"
    });

    res.send(filterdata)

  }else{
    res.send(data)
  }
})

app.listen("5000", ()=>{
  console.log("server started")
})