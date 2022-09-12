const usersController = {
    index: (req, res) => {
        res.render('orders');
    },
    profile: (req, res) => {
        res.render('profile');
    },
    address: (req, res) => {
        res.render('address');
    }
}

module.exports = usersController;