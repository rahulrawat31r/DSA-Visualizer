const express  = require ('express')
const app = express ()
const path = require ('path')

app.set ('view engine','pug')
app.set ('views',path.join (__dirname,'views'));

app.use (express.urlencoded ());

app.listen (80,()=>{
    console.log ('Server is live !');
})

app.get ('/sort',(req,res)=>{
    res.render ('file.pug');
})

app.post ('/detail',(req,res)=>{
    const text = req.body;

    res.render ('details.pug',{runner : text.kahajana});
})

app.get ('/stacks',(req,res)=>{
    res.render ('stacks.pug');
})

app.get ('/queue',(req,res)=>{
    res.render ('queue.pug')
})

app.get ('/',(req,res)=>{
    res.render ('home.pug');
})

app.get('/binary',(req,res)=>{
    res.render ('binarysearch.pug');
})

app.get ('/queen',(req,res)=>{
    res.render ('nqueen.pug');
})