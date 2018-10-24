var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
    uri: "mongodb://mary:admin123@ds050077.mlab.com:50077/vue-inspire",
    collection: "Sessions"
});

store.on("error", function (err) {
    console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
    secret: "sup3r s3cr3t th1ng w3 n33d",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
    },
    store,
    resave: true,
    saveUninitialized: true
});

module.exports = session;