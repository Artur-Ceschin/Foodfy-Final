<h1 align='center'>
  <img src="github/chef.png" width="200">
</h1>

<p align='center'><img src="github/logo.png"></p>
  
<p align='center'>:plate_with_cutlery: Learn how to make the best recipes created by professionals from around the world!<p>

## :construction_worker: What do we create?

Foodfy is a complete web application for recipe management, developed on the [Rocketseat's](https://rocketseat.com.br) LaunchBase Bootcamp.


## :computer: Technologies

Some of the technologies and tools used in the project:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Express Session](https://github.com/expressjs/session)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Faker.js](https://github.com/Marak/Faker.js)
- [Multer](https://github.com/expressjs/multer)
- [PostgreSQL](https://www.postgresql.org/)

<br>

## :runner: Getting started

**You need to install [Node](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/).**

Follow the steps bellow:

```bash
# Open a terminal and copy this repository with the command
$ git clone https://github.com/Artur-Ceschin/Foodfy-Final.git

# Enter the directory with
$ cd foodfy

# Install dependencies
$ npm install

# Create the database and tables using the commands
# included in the "database.sql" file

# Database connection:
# Open and edit the "db.js" file inside the "src/config" folder
# with your Postgres user and password.

# Populate the database using the file "seed.js":
$ node seed.js

# Run the application:
$ npm start
```

<br>

### Access to the administrative area

Select an email from the users table, access the login screen and enter using it with the password "0000" (default password).
<br>

### Creating New Users and Password Recovery
To use these features, edit the mailer.js file inside the scr/lib folder with your credentials.
<br><br>

### License ????
This project is under the [MIT license](https://github.com/Artur-Ceschin/Foodfy-Final/blob/master/LICENSE).
<br><br>
Feito por Artur Ceschin ???????? [Entre em contato!](https://www.linkedin.com/in/artur-peres-ceschin-programador/)
