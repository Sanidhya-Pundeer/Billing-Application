const express = require('express');
const connection=require('./connection');
const app = express();


app.use(express.json());
connection()

app.use(express.json())

app.routes('/api',adminRoutes)
app.routes('/api',userRoutes)

app.listen(5000, (error) => {
    if (error) {
        console.log("error starting server");
    }
    else {
        console.log("server started at port 5000");
    }

});