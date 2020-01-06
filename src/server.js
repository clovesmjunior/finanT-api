import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 3001));
app.set('host', (process.env.HOST || '0.0.0.0'));

app.get('/', (req, res) => {

    console.log('passou aqui');
    console.log(req);
    console.log(res);
    res.json({})
})

app.listen(app.get('port'), app.get('host'))
