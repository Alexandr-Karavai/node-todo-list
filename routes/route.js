const { Router } = require('express');
const TodoDB = require('../model/TodoDB');
const router = Router();

router.get('/', async (req, res) => {
    const todos = await TodoDB.find({});
    res.render('index', {
        title: 'TODO List',
        isIndex: true,
        todos
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

router.post('/completed', async (req, res) => {

});

router.post('/remove', async (req, res) => {
    await TodoDB.deleteOne({_id: req.body.id});
    res.redirect('/');
});

module.exports = router;