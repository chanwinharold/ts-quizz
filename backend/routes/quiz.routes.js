const { Router } = require("express");
const { getCategories, getQuestions } = require("../core/data");

const router = Router();

router.get("/health", (req, res) => {
    res.json({
        data: {
            status: "ok",
            categories: getCategories().length,
        },
        message: "OK",
    });
});

router.get("/categories", (req, res) => {
    res.json({
        data: getCategories(),
        message: "OK",
    });
});

router.get("/questions", (req, res) => {
    const { category, difficulty, limit } = req.query;
    const result = getQuestions({ category, difficulty, limit });

    if (result.error) {
        return res.status(400).json({ data: null, message: result.error });
    }

    res.json({
        data: result,
        message: "OK",
    });
});

module.exports = router;
