const express = require('express');
const logger  = require('morgan');
const app = express();


app.use(logger('dev'))

//routes
app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "You requested index Page"
    })
});


//catch 404 Error and forward them to error handler
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Error Handler
app.use((err, req, res, next)=>{
    const error = app.get('env') === 'development' ? err: {};
    const status = err.status || 500;

    //client response
    res.status(status).json({
        error:{
            message: error.message
        }
    });

    // our response 
    console.log(err);

})


const port = 3000;
app.listen(port,() => console.log(`Server is running on port ${port}`))