const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
    {
        workerId: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        status: {
            type: String,
            enum: ["Present", "Absent", "Leave"],
            required: true
        },

        checkIn: {
            type: String,
            default: null
        },

        checkOut: {
            type: String,
            default: null
        }
    },

    {
        timestamps: true
    }
);

module.exports =
    mongoose.model("Attendance", attendanceSchema);