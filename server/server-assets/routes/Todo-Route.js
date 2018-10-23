let router = require('express').Router()
let Todo = require('../models/Todo')

router.get('/', (req, res, next) => {
    Todo.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

router.post('/', (req, res, next) => {
    req.body.authorId = req.session.uid
    Todo.create(req.body)
        .then(newTodo => {
            res.send(newTodo)
        })
})

router.put('/:id', (req, res, next) => {
    Todo.findById(req.params.id)
        .then(todo => {
            if (!todo.authorId.equals(req.session.uid)) {
                return res.status(401).send('Not yours to change!')
            }
            todo.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send('Todo updated!')
            });
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

router.delete('/:id', (req, res, next) => {
    Todo.findById(req.params.id)
        .then(todo => {
            if (!todo.authorId.equals(req.session.uid)) {
                return res.status(401).send("Not yours to delete!")
            }
            Todo.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('Delorted!')
                })
        })
})

module.exports = router