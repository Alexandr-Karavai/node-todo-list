const { Router } = require('express');
const TodoDB = require('../model/TodoDB');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'TODO List',
        isIndex: true
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create task',
        isCreate: true
    });
});

router.post('/create', async (req, res) => {
    const todo = new TodoDB({
        title: req.body.title
    });
    await todo.save();
    res.redirect('/');
});

module.exports = router;