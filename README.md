# training-fs-super_basic-toDo_list
---
## Description
Web project full stack.  
A basic ToDo list with simple CRUD.
## Objectives
Learn, practice, know and compare differents technologies based on JavaScript.
## Requirements
- Single Page Application
- Free access to home page
- Restricted access to private page (ToDo List)
- SigUp page
  - Save password encrypted
- Login page
  - Validate access
- LogOut button
- Persist information (session and todo list) while user don't use LogOut button
## Task
- [ ] Databases on MongoDB
  - [ ] Database for users
  - [ ] Database for todos
- [ ] Backend microservices
  - [ ] Users microservice
  - [ ] Todos microservice
- [ ] Frontend SPA with CSS from CDN Bootstrap
  - [ ] Vanilla JavaScript
  - [ ] Angular
  - [ ] Svelte
  - [ ] Vue
  - [ ] React
## More info
Running this project locally.
### Instructions
To get started you will first need the followind installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
Then you must make sure you have running locally MongoDB.
1. #### Clone this repository
2. #### Start Backend microservices
  1. Running Users microservice
Open first terminal and execute the followin commands
```
$ cd usersBackend
$ npm install
$ npm run dev
```
You must be looking this at your first teminal
```
Server running on port 4000
Users database connected
```
  2. Running Todos microservice
Open a second terminal and execute the followin commands
```
$ cd todosBackend
$ npm install
$ npm run dev
```
You must be looking this at the your second terminal
```
Server running on port 4100
Todos database connected
```
3. #### Start Frontend
##### JavaScript - Vanilla
- ... soon ...
##### JavaScript - Angular
Open another terminal and execute the followin command
```
$ cd angularFrontend
$ npm install
$ npm start
```
Open http://localhost:4200 in your browser
##### JavaScript - React
- ... soon ...
##### JavaScript - Svelte
- ... soon ...
##### JavaScript - Vue
- ... soon ...
### Use
- visit home page
- try visit private page
- go to Sign Up and create an account
- go to Login and use your credentials
- visit private page
- test app, CRUD todo list
- switch between home page and private page
- select LogOut
- switch between home page and private page again
---
:copyright: 2022
## Software Developer
[Javier Andrés Garzón Patarroyo](https://javierandresgp.com)
