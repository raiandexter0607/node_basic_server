const express = require('express')
const app = express()
const hbs = require('hbs');


//midleware : filtrar cualquier tipo de peticion, callback que se va ejecutar siempre no importa que URL se pida
// con el express.static podemos servir archivos que el usuario puede ver.
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials')

// Express HBS
app.set('view engine', 'hbs');

app.get('/', (req, res)=> {
    res.render('home.hbs', {
        nombre: 'Brayan',
        anio: new Date().getFullYear()
    })
})


app.listen(3000, ()=>{
    console.log('Escuchando peticiones por el puerto 3000')
})