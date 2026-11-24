const Product = require("../../models/product.model");
// GET /admin/product
module.exports.product = async (req, res) => {
    let filterStatus = [
        {
        name:"Tất cả",
        status:"",
        class:""
    },{
        name:"Hoạt động",
        status:"active",
        class:""
    },{
        name:"Dừng hoạt động",
        status:"inactive",
        class:""
    }
    ];

    let find = {
                deleted : false
    };

    if(req.query.status){
        find.status = req.query.status;
    }

    let keyword = "";
        if(req.query.keyword){
        keyword = req.query.keyword;

        const regex = new RegExp(keyword,"i");
        find.title = regex;
    }

// Nút đang được chọn
    // const statusCurrent = req.query.status || "";

    // filterStatus.forEach(item => {
    //     if (item.status == statusCurrent) {
    //         item.class = "active";
    //     }
    // });

    if(req.query.status){
        const index = filterStatus.findIndex(item => item.status ==req.query.status);
        filterStatus[index].class = "active";

    }else{
        const index = filterStatus.findIndex(item => item.status =="");
        filterStatus[index].class = "active";
    }

    const products = await Product.find(find);
    // console.log(products);


    res.render("admin/pages/product/index",
        {
            pageTitle : "Danh sách sản phẩm", 
            products: products,
            filterStatus: filterStatus,
            keyword: keyword
        });
};