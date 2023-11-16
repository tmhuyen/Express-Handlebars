const { products, categories } = require("../data");

const controller = {};

controller.show = (req,res) => {
    let {products, categories} = require("../data");
    let productList = req.query.category ? products.filter((item) => item.category == req.query.category) : products;
    res.render("task3", {products: productList, categories});
    //Truyen du lieu truc tiep 29 = 25+26
    // res.render("task1",{emotions});
};
module.exports = controller;