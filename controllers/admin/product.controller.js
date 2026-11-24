const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");

// GET /admin/product
module.exports.product = async (req, res) => {

    const filterStatus = filterStatusHelper(req.query);

    let find = {
                deleted : false
    };

    if(req.query.status){
        find.status = req.query.status;
    }

    const objectSearch = searchHelper(req.query);
    if(objectSearch.regex){
        find.title = objectSearch.regex;
    }


// Nút đang được chọn
    // const statusCurrent = req.query.status || "";

    // filterStatus.forEach(item => {
    //     if (item.status == statusCurrent) {
    //         item.class = "active";
    //     }
    // });

    const products = await Product.find(find);
    // console.log(products);


    res.render("admin/pages/product/index",
        {
            pageTitle : "Danh sách sản phẩm", 
            products: products,
            filterStatus: filterStatus,
            keyword: objectSearch.keyword
        });
};