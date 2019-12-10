const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
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

app.use(express.urlencoded({extended: true}));
app.use(route);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://alexandr:1a2s3d4f@cluster0-gx2ss.mongodb.net/task', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    } catch (e) {
        console.log(e);
    }
}

start();



