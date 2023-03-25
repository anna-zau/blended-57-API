const router = require("express").Router();

const {
  getFullOverview,
  getAll,
  getTopBooks,
  getById,
  getByCategory,
} = require("../controllers/controllers");

router.get("/all", getAll);
router.get("/full-overview", getFullOverview);
// router.get("/top-books", getTopBooks);
router.get("/category", getByCategory);
router.get("/:id", getById);

module.exports = router;
