const Account = require('../models/userAccount');

exports.getCreateUser = (req, res, next) => {
    res.render('create-user', {
        pageTitle: 'Create Account',
        path: 'create-user'
    });
}

exports.postCreateUser = (req, res, next) => {
    const account = new Account(req.body.username,req.body.password);
    account.save();
    res.redirect('/');

}