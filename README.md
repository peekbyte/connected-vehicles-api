# Connected-Vehicle API

Connected-Vehicle is the API server. The single page web app uses this as a backend 
API to watch the status of customers' vehicles.

It's a Nodejs Expressjs application that relies on mongodb database.

## Docker Dev Environment

## Prerequisites

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
    
## Development
run by nodemon
npm install -g nodemon

## Production
export NODE_ENV=production

## Deply

Heroku

Install Heroku

```bash
sudo snap install heroku --classic
```
heroku login

nginx

### Requirenments


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
