# Connected-Vehicle API

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

#### Serfer
check firewall.

```bash
sudo ufw status

```

If port 80 is closed, open it

```bash
ufw enable
ufw allow 80
```
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


#### nginx
```bash
$ apt install nginx
systemctl start nginx.service
```

#### git
Generate ssh key
ssh-keygen -t rsa -b 4096 -C hfalahi@gmail.com
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub

add this key to github deployment key