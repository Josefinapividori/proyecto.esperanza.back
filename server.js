const express = require('express')
const cors = require("cors");
const db = require("./database/db");
const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");
const app = express()


app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

app.listen(5005, () => {
    console.log('SERVIDOR LEVANTADO');
    db();
});
