var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/peerjs'});
console.log('peer server started at port 9000');