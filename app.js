const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/@mdi/font')));

const accountRoutes = require('./routes/userAccount')
const viewRoutes = require('./routes/viewUser')

app.use(bodyParser.urlencoded({extended: false}));

app.use(accountRoutes);
app.use(viewRoutes);

app.listen(3000);