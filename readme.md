# ITdev-be Rest API

# Features
## There are several features of this API and Endpoint, as below :

### Public

<ul>
<li>Register</li>
<li>Login</li>
</ul>

### Private

<ul>
<li>Personal Data</li>
</ul>

# Requirements

## <ul><li>Node Js</li></ul>
For development you need to download node js app to run server-side, You can download it [official Node.js](https://nodejs.org/en/)

## <ul><li>MongoDB</li></ul>
For the database here using [MongoDB](https://www.mongodb.com/), can check the documentation for mongodb configuration setup : [Docs MongoDB](https://www.mongodb.com/docs/)

## <ul><li>Postman</li></ul>
To do the test, you can go through the Postman application, you can download it [official Postman](https://www.postman.com/downloads/)

# How to run the Application

## 1 Clone Repository

### Clone this repository by running the following command :

```
git clone https://github.com/Hazgn/itdev-be.git

```

## 2 Install Dependencies Package

### Install the dependencies package inside the application folder by running this command :
```
npn install
```

## 3 Setups Project

<ul>
<li>Setup MongoDB</li>
</ul>

about install - setup mongoDB can be seen here : [How to Download & Install MongoDB on Windows - medium](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)

note : here I create a database with the name itdev-be, and 1 collection with the name users

<ul>
<li>Setup Postman</li>
</ul>

Setups Environment : Create Environment from postman, fill in variable and value

<table>
<tr>
<td>HOST</td>
<td>	http://localhost:8000 or your ipv4 ip address/virtual host. expample : http://192.168.56.258:8000</td>
</tr>
<tr>
<td>TOKEN</td>
<td>just leave the initial value blank, it can be filled in after the login feature</td>
</tr>
</table>

my collection : [itdev-be-api](https://documenter.getpostman.com/view/18051667/UzBjsTYP)

<ul><li>Setups Environment File</li></ul>
Create file name .env on the folder project Create an .env file name in the project folder, then fill in the variables like this :

<table>
<tr>
<td>DB</td>
<td>The name of the database you created earlier</td>
</tr>
<tr>
<td>PORT</td>
<td>as needed, here I use port 8000</td>
</tr>
<tr>
<td>ISSUER</td>
<td>fill anything you want, example : Haz</td>
</tr>
<tr>
<td>SECRET_KEY</td>
<td>fill anything you want, example : itdev-be</td>
</tr>
</table>

## 4 Run Project
Run the app in development mode. with a command like the following :
```
npm start
```
or if using nodemon
```
npm run dev
```

Open http://localhost:8000 or your ipv4/virtual host, example : http://192.168.56.258:8000 to view it in your browser.