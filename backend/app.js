const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const { CORS_ORIGIN } = require("./core/config");
const quizRouter = require("./routes/quiz.routes");

const app = express();

const allowedOrigins =
    CORS_ORIGIN && CORS_ORIGIN !== "*"
        ? CORS_ORIGIN.split(",").map((origin) => origin.trim())
        : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use("/api", quizRouter);

const DIST_DIR = path.resolve(__dirname, "..", "frontend", "dist");

if (fs.existsSync(path.join(DIST_DIR, "index.html"))) {
    app.use(express.static(DIST_DIR));
    app.use((req, res, next) => {
        if (req.method !== "GET" || req.path.startsWith("/api")) return next();
        res.sendFile(path.join(DIST_DIR, "index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.status(200).json({
            data: null,
            message: "QuizMaster API running...",
        });
    });
}

app.use("/api", (req, res) => {
    res.status(404).json({ data: null, message: "API route not found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ data: null, message: "Internal server error" });
});

module.exports = app;
