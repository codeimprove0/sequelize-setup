const express = require('express');
const app = express();
const port = 3000; 

const UserCtrl =  require('./controllers/UserController')



app.get("/user-list", UserCtrl.list)


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})