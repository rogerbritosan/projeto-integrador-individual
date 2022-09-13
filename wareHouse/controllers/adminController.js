const adminController = {
    sales: (req, res) => {
        res.render('admin/sales');
    },
    users: (req, res) => {
        res.render('admin/users');
    },
    products: (req, res) => {
        res.render('admin/products');
    },
    productdetails: (req, res) => {
        res.render('admin/product-details');
    },
    productcreate: (req, res) => {
        res.render('admin/productcreate');
    },
    productssuccessful: (req, res) => {
        res.render('admin/products');
    },
    productedit: (req, res) => {
        res.render('admin/productedit');
    },
    productupdate: (req, res) => {
        res.render('admin/productupdate');
    },
    productdelete: (req, res) => {
        res.render('admin/productdelete');
    },
    categories: (req, res) => {
        res.render('admin/categories');
    },
    providers: (req, res) => {
        res.render('admin/providers');
    }
}

module.exports = adminController;