const express = require("express");
const Attendance = require("../models/Attendance");

const router = express.Router();


// ==========================================
// 1. ADD ATTENDANCE
// POST /api/attendance
// ==========================================

router.post("/", async (req, res) => {
    try {
        const attendance = new Attendance(req.body);

        const savedAttendance = await attendance.save();

        res.status(201).json({
            message: "Attendance added successfully",
            attendance: savedAttendance
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error adding attendance",
            error: error.message
        });
    }
});


// ==========================================
// 2. GET ALL ATTENDANCE
// GET /api/attendance
// ==========================================

router.get("/", async (req, res) => {
    try {
        const attendance = await Attendance.find()
            .sort({ date: -1 });

        res.json(attendance);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching attendance",
            error: error.message
        });
    }
});


// ==========================================
// 3. GET ATTENDANCE OF ONE WORKER
// GET /api/attendance/worker/EMP001
// ==========================================

router.get("/worker/:workerId", async (req, res) => {
    try {
        const attendance = await Attendance.find({
            workerId: req.params.workerId
        }).sort({ date: -1 });

        res.json(attendance);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error fetching worker attendance",
            error: error.message
        });
    }
});


// ==========================================
// 4. UPDATE ATTENDANCE
// PUT /api/attendance/:id
// ==========================================

router.put("/:id", async (req, res) => {
    try {
        const attendance =
            await Attendance.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.json({
            message: "Attendance updated successfully",
            attendance: attendance
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error updating attendance",
            error: error.message
        });
    }
});


// ==========================================
// 5. DELETE ATTENDANCE
// DELETE /api/attendance/:id
// ==========================================

router.delete("/:id", async (req, res) => {
    try {
        const attendance =
            await Attendance.findByIdAndDelete(
                req.params.id
            );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.json({
            message: "Attendance deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error deleting attendance",
            error: error.message
        });
    }
});


module.exports = router;