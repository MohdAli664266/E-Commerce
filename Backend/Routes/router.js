const express = require("express");
const allusers = require("../Controller/allusers")
const login = require("../Controller/login");
const signup = require("../Controller/signup");
const deleted = require("../Controller/delete");
const products = require("../Controller/products");
const addToCart = require("../Controller/addToCart");
const myCart = require("../Controller/mycart");
const feedback = require("../Controller/feedback");
const productFeedback = require("../Controller/ProductFeedback");
const logout = require("../Controller/logout");
const contactus = require("../Controller/contactus");
const search = require("../Controller/search");
const createCategory = require("../Controller/createCategory");
const allcategory = require("../Controller/allcategory");
var router = express.Router();

router.route("/allusers").get(allusers);
router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/addToCart").post(addToCart);
router.route("/products").get(products);
router.route("/myCart").post(myCart);
router.route("/allcategory").get(allcategory);
router.route("/feedback").post(feedback);
router.route("/productFeedback").post(productFeedback);
router.route("/logout").post(logout);
router.route("/delete").post(deleted);
router.route("/contactus").post(contactus);
router.route("/search").post(search);
router.route("/createcategory").post(createCategory);






module.exports = router;