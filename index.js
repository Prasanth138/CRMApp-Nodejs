require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const mongoose = require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));


//Server production Asset
// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join("Frontend/build")))
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname,"Frontend","build", "index.html"));
//     })
// }


//port
const PORT=process.env.PORT || 5000;

//MONGODB URI
const URI= "mongodb+srv://crmapp:crmapp@cluster0.gjpeq.mongodb.net/crmapp?retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})