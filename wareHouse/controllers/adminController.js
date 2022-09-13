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
    categories: (req, res) => {
        res.render('admin/categories');
    },
    providers: (req, res) => {
        res.render('admin/providers');
    }
}

module.exports = adminController;