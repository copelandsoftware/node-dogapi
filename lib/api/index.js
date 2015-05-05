var api = {
    comment: require("./comment"),
    downtime: require("./downtime"),
    event: require("./event"),
    graph: require("./graph"),
    host: require("./host"),
    infrastructure: require("./infrastructure"),
    metric: require("./metric"),
    monitor: require("./monitor"),
    screenboard: require("./screenboard"),
    serviceCheck: require("./serviceCheck"),
    tag: require("./tag"),
    timeboard: require("./timeboard"),
    user: require("./user"),
};

module.exports = function(obj){
    for(key in api){
        obj[key] = api[key];
    }
};