## Hyperledger - Fabric - NodeJS - Angular

This is a sample solution having multiple layers and modified after forked from [fabric-samples](https://github.com/hyperledger/fabric-samples)/fabcar

Here assumption is that you have installed all [prerequisites](https://hyperledger-fabric.readthedocs.io/en/release-1.3/prereqs.html) that a standard Hyperledger Fabric requires.

We have three folders for three different layers

### HLF
this folder contains all Fabric related cryptographic material, channel, genesis block and chaincode.

### Fabcar
this is web server based on nodejs and expressjs. facilitates following things.
* Acts as client for Fabric network by using **Fabric-Client** sdk
* Acts like a web server that wraps all the fabric interaction logic as REST API (GET, POST endpoints).
* Bridge between a user interface layer and fabric network layer.

 ### FabCarClient
This is end user interface developed using Angular 7.
This consumes REST api to contact with **fabcar** web server.

## Start Fabric
Run following commands in **fabcar** folder to start network, install dependencies, enroll admin and register user.

```
cd fabcar

./startFabric.sh

npm install

node enrollAdmin.js

node registerUser.js
```

## Start Web server
Run following commands in **fabcar** folder to start the web server

```
node app.js
```

## Set up User interface
Open another terminal and run following commands in **FabCarClient** folder to start the user interface application.

```
cd FabCarClient

npm install -g @angular/cli

npm install

ng serve

```

After completion of above commands. open any web browser and follow this link http://localhost:4200

![Screenshot](/Screenshot1.png?raw=true "angular client app screen")

![Screenshot](/Screenshot2.png?raw=true "angular client app screen")

## Stop the network
To stop network after testing, run the given commands in **HLF** folder
```
cd HLF

./stop.sh
```

## Kill the network
To kill the complete network, use the **./teardown.sh** in **HLF** folder

```
cd HLF

./teardown.sh
```


Thank you.
