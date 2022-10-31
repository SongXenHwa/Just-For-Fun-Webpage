console.log(__dirname);
let express = require('express');
let app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('aespa'));
app.use(express.static('ive'));
app.use(express.static('home_img'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/", function(req, res){
    res.sendFile(__dirname + "/home.html")
});

app.get("/ive", function(req, res){
    res.sendFile(__dirname + "/ive/ive.html")
});

app.get("/aespa", function(req, res){
    res.sendFile(__dirname + "/aespa/aespa.html")
});

app.listen(8080);