const express = require("express");

const Worker = require("../models/Worker");

const router = express.Router();


// ==========================================
// GET ALL WORKERS
// ==========================================

router.get("/", async (req, res) => {

    try {

        const workers =
            await Worker.find();

        res.json(workers);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ==========================================
// GET ONE WORKER
// ==========================================

router.get("/:workerId", async (req, res) => {

    try {

        const worker =
            await Worker.findOne({
                workerId: req.params.workerId
            });


        if (!worker) {

            return res.status(404).json({
                message: "Worker not found"
            });

        }


        res.json(worker);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ==========================================
// ADD WORKER
// ==========================================

router.post("/", async (req, res) => {

    try {

        const worker =
            new Worker(req.body);

        const savedWorker =
            await worker.save();

        res.status(201).json({

            message: "Worker added successfully",

            worker: savedWorker

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ==========================================
// UPDATE WORKER
// ==========================================

router.put("/:workerId", async (req, res) => {

    try {

        const worker =
            await Worker.findOneAndUpdate(

                {
                    workerId: req.params.workerId
                },

                req.body,

                {
                    new: true,
                    runValidators: true
                }

            );


        if (!worker) {

            return res.status(404).json({
                message: "Worker not found"
            });

        }


        res.json({

            message: "Worker updated successfully",

            worker: worker

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ==========================================
// DELETE WORKER
// ==========================================

router.delete("/:workerId", async (req, res) => {

    try {

        const worker =
            await Worker.findOneAndDelete({

                workerId: req.params.workerId

            });


        if (!worker) {

            return res.status(404).json({
                message: "Worker not found"
            });

        }


        res.json({

            message: "Worker deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;