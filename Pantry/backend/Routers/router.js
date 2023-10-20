const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../Controllers/controller");

router.get("/", getAllProducts);
router.post("/create", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;