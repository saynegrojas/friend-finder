//npm packages
const express = require('express');

const path = require('path');

//get access to express
const app = express();

//port with heroku process.env
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//api route
require("./routes/apiRoutes")(app);
//html route
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});