const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//register partials HBS
hbs.registerPartials(__dirname + '/views/partials');

//Register Helpers HBS


//Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Joseph Roman',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});