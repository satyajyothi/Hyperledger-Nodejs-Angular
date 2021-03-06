var Fabric_Client = require('fabric-client');

var fabric_client = new Fabric_Client();
var channel = fabric_client.newChannel('mychannel');
var peer = fabric_client.newPeer('grpc://localhost:7051');
channel.addPeer(peer);
var order = fabric_client.newOrderer('grpc://localhost:7050')
channel.addOrderer(order);

var path = require('path');
var store_path = path.join(__dirname, 'hfc-key-store');

module.exports = {

    setUser: async (fabricclient, username) => {
        return new Promise((resolve, reject) => {
            Fabric_Client.newDefaultKeyValueStore({ path: store_path })
                .then((state_store) => {
                    fabricclient.setStateStore(state_store);
                    var crypto_suite = Fabric_Client.newCryptoSuite();
                    var crypto_store = Fabric_Client.newCryptoKeyStore({ path: store_path });
                    crypto_suite.setCryptoKeyStore(crypto_store);
                    fabricclient.setCryptoSuite(crypto_suite);
                    fabricclient.getUserContext(username, true).then((user_from_store) => {
                        if (user_from_store && user_from_store.isEnrolled()) {
                            resolve(true);
                        } else {
                            reject(false);
                        }
                    });
                });
        });
    },
    attachFabricClient: (req) => {
        req.fabricClient = fabric_client;
        req.channel = channel;
        req.Fabric_Client = Fabric_Client;
        req.peer = peer;
    }

}