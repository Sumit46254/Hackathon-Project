const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {

    try {

        const { userId, password, role } = req.body;


        // Check input

        if (!userId || !password || !role) {

            return res.status(400).json({
                message: "User ID, password and role are required"
            });

        }


        // Find user

        const user = await User.findOne({
            userId: userId,
            role: role
        });


        // User doesn't exist

        if (!user) {

            return res.status(401).json({
                message: "Invalid ID or password"
            });

        }


        // Check password

        const passwordCorrect =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!passwordCorrect) {

            return res.status(401).json({
                message: "Invalid ID or password"
            });

        }


        // Create token

        const token =
            jwt.sign(
                {
                    userId: user.userId,
                    role: user.role,
                    workerId: user.workerId
                },

                process.env.JWT_SECRET,

                {
                    expiresIn: "2h"
                }
            );


        // Successful login

        res.json({

            message: "Login successful",

            token: token,

            user: {
                userId: user.userId,
                name: user.name,
                role: user.role,
                workerId: user.workerId
            }

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});


module.exports = router;