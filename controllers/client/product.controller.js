
const Product = require('../../models/product.model');

// GET /products
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: 'active'
    });
    // console.log(products);

    // products.forEach(product => {
    //     product.newPrice = product.price - (product.price * product.discountPercentage / 100).toFixed(0);
    // }); sua truc tiep trong mang

    // Cach 2: tao mang moi
    const newProducts = products.map(item => {
        const newPrice = item.price - (item.price * item.discountPercentage / 100).toFixed(0);
        return item;
    });

    res.render("client/pages/products/index",{
        pageTitle : "Sản phẩm",
        products: newProducts
    });
}