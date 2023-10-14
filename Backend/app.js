const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static('public'))



app.listen(5000, (error) => {
    if (error) {
        console.log("error starting server");
    }
    else {
        console.log("server started at port 5000");
        console.log("heelloooow");
        console.log("Heyyy");
    }

});