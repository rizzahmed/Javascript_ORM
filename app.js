var fs = require('fs');
bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 56000


app.use(bodyParser.json());

// this is the content of your file.html
var html = fs.readFileSync("main.html","utf-8");



const funcs = require('./functons');
const  knex  = require('./Tables/users');


app.post('/add', async (req, res) => {
//   res.send(html);
console.log(req.body)
    let data = await funcs.Insert(req.body.fname,req.body.lname,req.body.email,req.body.password)
    
    // funcs.Insert()
    //     .then(()=> knex.destroy())
    //     .catch((err)=> {
    //         console.error(err);
    //         return knex.destroy();
    //     });
    
    res.send(data)
});


app.post('/delete', async (req, res) =>  {
    let data = await funcs.Delete(req.body.id)
    res.send(data)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})