const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const users = require('./routes/users')
mongoose.connect('mongodb+srv://admin-hamze:hamze1122@cluster0.r5u1n.mongodb.net/apiProject')

//routes
app.use('/users', users)


//catch 404 Error and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Error Handler
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    //client response
    res.status(status).json({
        error: {
            message: error.message
        }
    });

    // our response 
    console.log(err);

})


const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))