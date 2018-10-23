var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var port = 3000

var whitelist = 'http://localhost:8080'
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
server.use(cors(corsOptions))

require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use(auth.router);

server.use((req, res, next) => {
    if (!req.session.uid) {
        return res.status(401).send({
            error: 'please login to continue'
        })
    }
    next()
})

//put routes here

let todoRoutes = require('./server-assets/routes/Todo-Route')
server.use('/api/todos', todoRoutes)

server.get('*', (req, res, next) => {
    res.status(404).send({
        error: 'No matching route.'
    })
})

server.listen(port, () => {
    console.log('server running on port: ', port)
})