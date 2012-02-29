

var server = require("server_handle");
var router = require("router_handle");

var requestHandlers = require("requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/lefthand"] = requestHandlers.lefthand;

server.start(router.route, handle);