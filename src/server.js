import express from 'express';


const app = express();

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
})

app.listen(8180)
