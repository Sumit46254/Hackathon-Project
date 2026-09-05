const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
    {
        workerId: {
            type: String,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        position: {
            type: String,
            default: "Worker"
        },

        dailyWage: {
            type: Number,
            required: true
        },

        joiningDate: {
            type: Date
        },

        status: {
            type: String,
            default: "Active"
        }
    },

    {
        timestamps: true
    }
);

module.exports =
    mongoose.model("Worker", workerSchema);