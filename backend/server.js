const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());

app.use(express.json());


// ==========================================
// MONGODB CONNECTION
// ==========================================
console.log("Mongo URI = ",process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(
            "MongoDB Connected Successfully"
        );
    })
    .catch((error) => {
        console.log(
            "MongoDB Connection Error:",
            error
        );

    });


// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {

    res.send(
        "Worker Management Portal Backend is Running"
    );

});


// ==========================================
// ROUTES
// ==========================================

const authRoutes =
    require("./routes/authRoutes");

const workerRoutes =
    require("./routes/workerRoutes");


app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/workers",
    workerRoutes
);


// ==========================================
// START SERVER
// ==========================================

const PORT =
    process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});