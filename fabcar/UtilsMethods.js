'use strict';
var UserService = require('./UserService');
var Fabric_Client = require('fabric-client');
var fabric_client = new Fabric_Client();
var channel = fabric_client.newChannel('mychannel');
var peer = fabric_client.newPeer('grpc://localhost:7051');
channel.addPeer(peer);
var ordererAdded = false;

UserService.setUser(fabric_client, 'user1').then((status) => {
	if (status === true) 
	console.log(fabric_client.getPeersForOrgOnChannel('mychannel'));	
});
UserService.setUser(fabric_client, 'user1').then((status) => {
	if (status === true) 
	console.log(fabric_client.getPeersForOrgOnChannel('mychannel'));	
});
