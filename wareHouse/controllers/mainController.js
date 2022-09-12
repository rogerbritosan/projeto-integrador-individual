const mainController = {
    index: (req, res) => {
        res.render('index');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    login: (req, res) => {
        res.render('login')
    },
    forgotpassword: (req, res) => {
        res.render('forgot-password')
    },
    signup: (req, res) => {
        res.render('signup')
    },
    editprofile: (req, res) => {
        res.render('edit-profile')
    },
    editaddress: (req, res) => {
        res.render('edit-address')
    },
    ordersuccessful: (req, res) => {
        res.render('order-successful')
    },
    orderunsuccessful: (req, res) => {
        res.render('order-unsuccessful')
    }
}

module.exports = mainController;