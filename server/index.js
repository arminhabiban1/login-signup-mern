const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Middleware
app.use(cors);
app.use(express.json())



// 2 routes 


//3 moongo db CONNECTION
mongoose.connect('mongodb+srv://Armin:12345@authentication-app.bgkfcse.mongodb.net/?retryWrites=true&w=majority&appName=authentication-app'
)
   .then(() => console.log('DB Connected'))
   .catch(err => console.log(err))



//4 GLOBAL ERROR HANDLER
app.use((err,res,req,next) => {
    err.statuCode= err.statuCode || 500;
    err.status= err.status ||'error';
    res.status(err.statuCode).json({
        status:err.status,
        message:err.message
    })
})


//5 SERVER
const port= 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
