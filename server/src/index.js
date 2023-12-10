const dotenv= require('dotenv');
const express= require('express');
const cookieparser= require('cookie-parser');
const path= require('path');
const session= require('express-session');
const cors= require('cors');

const app= express();

const userRouter= require('../routes/user-route');

dotenv.config({
    path: './.env'
});

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'terikehkelungabsdk'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,'../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use('/', userRouter);


const startServer= async()=>{
    try{
        app.listen(process.env.PORT, ()=>{
            console.log("App Listening on port", process.env.PORT);
        })
    }catch(err){
        console.log(err);
    }
}

startServer();