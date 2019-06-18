[![Build Status](https://travis-ci.com/peekbyte/connected-vehicles-api.svg?branch=master)](https://travis-ci.com/peekbyte/connected-vehicles-api)

# Connected-Vehicle API

Connected-Vehicle is the API server. The single page web app uses this as a backend 
API to watch the status of customers' vehicles. Besides, all vehicles are able to send their status to this api.

It's a Nodejs Expressjs application that relies on mongodb database.

## Managing your dev environment

To run api in docker, I have included a docker-compose file. If you know docker-compose, feel free to use it 
directly, but for ease of use, I have included a Makefile to make it easier to handle some common scnearios with 
docker-compose.

* make

Make without a target (or `make run`) will build the docker-compose environment and start it up, if it isn't already 
running.

* make restart

This will restart all of the components in your setup without destroying any data.

* make fresh

This will tear down and rebuild the docker-compose environment, including rebuilding a fresh database, but it will not trigger a rebuild of the docker image.

* make rebuild

This will additionally rebuild the docker image for api. This is only necessary if dependencies change.

* make clean

This will stop and tear down your docker dev environment.

## Using the localhost web app

The web app will run at `http://localhost:3000` so just point your browser to that URL. 
The are no credentials.

## Watching Logs

You can attach to any of the dev containers and watch logs using `docker-compose logs $name`. There is a `-f` flag to 
follow new entries, similar to the `tail` command. Most commonly, you'd want to watch the API logs, so run

    docker-compose logs -f api
    
## Development Outside Of Docker
Run by nodemon
```bash
>> npm install -g nodemon
>> yarn start
```

## Deply And Production

export NODE_ENV=production

Heroku

Install Heroku

```bash
sudo snap install heroku --classic
```
heroku login

nginx


## Install out of docker
#### MongoDB
Install
```bash
$ sudo apt install mysql-server
```
Configure
```bash
```
Show all databases
```bash
> show dbs
```
Connect to database
```bash
> use connected-vehicle-db
```
Query
```bash
> db.customers.find({}) // all customers
```
## API Resources

Endpints:
Development: http://localhost:8080
Production: https://connected-vehicles.herokuapp.com

### Create Customer
Create customer and its vehicles

#### Resource URL
> POST /v1/customer

#### Sample Payload
```javascript
{
        name: 'Kalles Grustransporter AB',
        address: 'Cementvägen 8, 111 11 Södertälje',
        vehicles: [
            {
                vehicleId: 'YS2R4X20005399401',
                regNumber: 'ABC123',
                connected: true
            },
            {
                vehicleId: 'VLUR4X20009093588',
                regNumber: 'DEF456',
                connected: false
            },
            {
                vehicleId: 'VLUR4X20009048066',
                regNumber: 'GHI789',
                connected: true
            }
        ]
    },
```    

### Remove All Customer
Remove all customers and their vehicles (to reset the database)

#### Resource URL
> GET /v1/customers

### Search Vehicles
Get list of all (or with filter) vehicles and the status of them

#### Resource URL
> POST /v1/vehicles?q=name&status=connected
q= name of customer
status= connected, disconnecte, or all


### Vehicle Connect
Update connnection status of the vehicle

#### Resource URL
> POST /vehicle/connect

#### Sample Payload
```javascript
{
    vehicleId: 'VLUR4X20009048066'
}
```