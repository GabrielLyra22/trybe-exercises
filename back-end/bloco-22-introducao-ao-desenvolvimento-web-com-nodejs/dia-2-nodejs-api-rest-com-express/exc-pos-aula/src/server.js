const app = require('./app');

const port = 3001;

app.get('/', (_req, res) => {
    res.send();
});

app.listen(port, () => console.log('server is running on port 3001'));