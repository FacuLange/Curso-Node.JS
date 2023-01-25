/*
const express = require('express')

const app = express()

app.get('/products', (req, res) => {
    res.send('Lista de productos')
})
app.post('/products', (req, res) => {
    res.send('Creando Productos')
})
app.put('/products', (req, res) => {
    res.send('Actualizando Productos')
})
app.delete('/products', (req, res) => {
    res.send('Eliminando productos')
})
app.patch('/products', (req, res) => {
    res.send('Actualizando una parte de los productos')
})

const express = require('express')

const morgan = require ('morgan')

const app = express()

app.use(morgan('dev'))

app.use(express.static('./public'))






app.all('/info', (req, res) => {
    res.send('server info')
})




app.get('/miarchivo', (req, res) => {
res.sendFile('./logo de java/logo.png', {
    root: __dirname
})
})
app.get('/user', (req, res) => {
    res.json({
        "name": "Facu",
        "lastname": "Lange",
        age: 40,
        ponits: [1, 2, 3],
        adress: {
            city: "Buenos Aires",
            street: "Terrada Y Mosconi"
        },
        

    });
});



app.use(express.text( ))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

*/

app.post('/user', (req, res) =>  {
    console.log(req.body)
    res.send('Nuevo Usuario Creado')
})




app.get('/hola/:username', (req, res) => {
    res.send(`Hola ${req.params.username}`)
}) 

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x)
    console.log(req.params.y)
    const result = parseInt(req.params.x) + parseInt(req.params.y)
    console.log(result)
    res.send(`Result <h1>${result}<h1>`)
})





app.get('/user/:username/photo', (req, res) => {
    if (req.params.username === "facu"){
   return res.sendFile('./logo de java/logo.png',{
        root: __dirname
    })

    }
res.send('El usurio no ha sido creado')

})



app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
    console.log(req.params)
})





app.get('/Hola/:username', (req, res) => {
    console.log(req.query.username)
    console.log(req.query.age)
    res.send(`Hola ${req.params.username.toUpperCase()}`)
})











app.use((req, res, next) => {
    console.log(`Route :  ${req.url} , Method: ${req.method}`)

    next()
})

app.use((req, res, next) => {
    console.log('Primer Midhware')
if (req.query.login === 'faculange.com') {
    next()
} else {
    res.send('no Autorizado')
}
    
    
})

app.get('/dashboard', (req, res) => [
    res.send('dashboard Page')

])



app.get('/profile', (req, res) =>{
    res.send('profile page')
})
















app.listen(3000);
console.log('Server on port $(3000)')