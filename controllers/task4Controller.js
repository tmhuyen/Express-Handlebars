const controller = {};
let {zodiacs} = require("../data");

controller.show = (req,res) => {
    
    res.render("task4", {zodiacs});
    //Truyen du lieu truc tiep 29 = 25+26
    // res.render("task1",{emotions});
};

controller.showDetails = (req,res) => {
    let zodiac = zodiacs.filter((item) => item.name == req.params.name)[0];
    res.render("task4-details",{zodiac});
}
module.exports = controller;