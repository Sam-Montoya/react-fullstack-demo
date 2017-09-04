const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive('postgres://postgres:@localhost/superhero').then(DB => {
    app.set('DB', DB);

    app.get('DB').init.seed_file();
}).catch(err => {console.log('Connection Issue: ' + err)})

app.get('/api/getSuperheroes', (request, response) => {
    request.app.get('DB').getSuperheroes().then( data => {
        response.status(200).send(data);
    })
});

app.post('/api/addSuperhero', (request, response) => {
    let {name, power} = request.body;
    request.app.get('DB').addSuperhero(name, power).then(hero => {
        response.status(200).send(hero);
    });
})

app.listen(3001, console.log('Im being hit on 3001'));