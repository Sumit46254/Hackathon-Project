const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const User = require("./models/User");


async function createUsers() {

    try {

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("MongoDB connected");


        // ==============================
        // WORKER PASSWORD
        // ==============================

        const workerPassword =
            await bcrypt.hash(
                "worker123",
                10
            );


        // ==============================
        // ADMIN PASSWORD
        // ==============================

        const adminPassword =
            await bcrypt.hash(
                "admin123",
                10
            );


        // ==============================
        // CREATE WORKER
        // ==============================

        await User.findOneAndUpdate(

            {
                userId: "EMP001"
            },

            {
                userId: "EMP001",

                name: "John Doe",

                password: workerPassword,

                role: "worker",

                workerId: "EMP001"
            },

            {
                upsert: true,
                new: true
            }

        );


        // ==============================
        // CREATE ADMIN
        // ==============================

        await User.findOneAndUpdate(

            {
                userId: "ADMIN001"
            },

            {
                userId: "ADMIN001",

                name: "Administrator",

                password: adminPassword,

                role: "admin",

                workerId: null
            },

            {
                upsert: true,
                new: true
            }

        );


        console.log(
            "Worker and Admin users created!"
        );


        await mongoose.connection.close();

    }

    catch (error) {

        console.error(error);

    }

}


createUsers();