const{defsult:mongoose}=require('mongoose');

const url="mongodb+srv://riya21csu082:scott@cluster0.wybbamo.mongodb.net/?retryWrites=true&w=majority"

const connection=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Connection successful");
    }).catch((error)=>{
        console.log("Connection unsuccessful");
    })
}

module.exports=connection