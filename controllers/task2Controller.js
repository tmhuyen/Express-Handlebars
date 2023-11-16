const controller = {};

controller.show = (req,res) => {
    let salary = req.query.salary ? parseFloat(req.query.salary) : 0;
    let jar55 = (salary * 55) / 100;
    let jar10 = (salary * 10) / 100;
    let jar5 = (salary * 5) / 100;
    res.render("task2", {jar55,jar10,jar5});

    //Truyen du lieu truc tiep 29 = 25+26
    // res.render("task1",{emotions});
};
module.exports = controller;