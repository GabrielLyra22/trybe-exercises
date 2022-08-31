const express = require('express');
const activities = require('./activities');

const app = express();
app.use(express.json());

app.get('/myActivities', (_req, res) => {
    res.status(200).json({ activities });
});

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(activity);
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    const filtered = activities.filter((activity) => activity.status === status);
    res.status(200).json(filtered);
});

app.get('/search/myActivities', (req, res) => {
    const { q } = req.query;
    const filtered = activities.filter((activity) => activity.description.includes(q));
    res.status(200).json(filtered);
});

module.exports = app;