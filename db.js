const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/celebrity?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok => console.log("database connected"))
.catch(err => console.log("error in connecting to database",err))

module.exports=mongoose;