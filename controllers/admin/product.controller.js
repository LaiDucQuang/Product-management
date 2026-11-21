// GET /admin/product
module.exports.product = (req, res) => {
    res.render("admin/pages/product/index",{pageTitle : "Danh sách sản phẩm"});
};