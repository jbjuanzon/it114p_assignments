const Account = require('../models/userAccount');

exports.getAccounts = (req, res, next) => {
    const account = Account.fetchAll();
    res.render('viewAccounts', {
      user: account,
      pageTitle: 'Accounts',
      path: '/',
    });
  };