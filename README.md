# Very short description of this PERN simple starter

This is just a simple Express Sequelize and Postgres (PERN) starter installation which is helpful for people interested in using this awesome (PERN). Included is a simple Users creation. It uses the MVC pattern, I hope you find this helpful. Cheers :clinking_glasses: 


## Getting Started
    There are two methods for getting started with this repo. 

    1. Download the .zip file. Extract the contents of the zip file then change directory to the file

    2. Checkout this repo, install dependencies, then start the gulp process with the following:

```bash
    > git clone https://github.com/Ayorinde-Codes/node-express-sequelize-postgres-template.git
    > cd node-express-sequelize-postgres-template
    > npm install
    > npm start
```

## Generate Environment Variable

simple run:

```bash
cp .env.example .env 
```
in your terminalof the the root directory

## Features
- Controller
- Model
- Server Responses 


## Migration:

## RUN 

To run a migration use:
```bash
Sequelize db:migrate
```

## Undo Migration:
```bash
sequelize db:migrate:undo:all 
```


## PostgresSql:

This template expects that you have postgres installed 
need help with installing postgres on mac check :
https://flaviocopes.com/postgres-how-to-install/

except you don't intend to use PostgresSql then edit the configuration dialect in Server -> config -> config.json 
to use mysql or sqlserver. i have installed mssql, and mysql in package.json file

## *bonus postgres:
to create a database with postgres use command 
```bash
    createdb testdb
```


## To create a model:

```bash
    sequelize model:create --name User --attributes name:string,username:string,email:string,password:string
```
* where
User: the model name,
Attributes: the table fields and data type structure


## Undo migration 
```bash
    sequelize db:migrate:undo:all
```


## One to many association 
in your users model in models -> user add 

```bash
    User.hasMany(models.Cloth, {
            foreignKey: 'userId',
        });
        };
        return User;
```

* where Cloth is another model you must have created.


* In a case where ClothModel is another model 
So we must have done this  : sequelize model:create --name Cloth --attributes name:string

Then that means we must edit out Cloth model to be :

```bash
        Cloth.associate = (models) => {
        // associations can be defined here
        Cloth.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        };
        return Cloth;
```

 simple postman collection for you to test: 

    https://www.getpostman.com/collections/88bc1498ad893f136a3d
 
 Feel free to clone and edit to your specifications. Add or Remove to your suit. 

 Happy coding :smiling_face_with_three_hearts:	

## Need Support
 - Contact me: ayorinde223@gmail.com

