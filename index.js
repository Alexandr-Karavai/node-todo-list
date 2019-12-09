const express = require('express');
const exphbs = require('express-handlebars');
const route = require('./routes/route');

const PORT = process.env.PORT || 3000;
const path = require('path');

const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(route);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));




