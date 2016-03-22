# boilerplate

Justa an (always WIP) personals frontend boilerplate with
* express
* jade
* riotjs
* webpack
* es6 modules

## Structure
UI components are below `client/components/`. Examples of components: header, footer, login form, etc.  
UI containers are below `client/containers`. They *contain* components. For instance the login ~~page~~ container is made from a header, a login form and a footer.

I'm on my way to learn modern UI development with riotjs and jade. Any suggestions will be more than welcome :)

## Install and run
`$ git clone git@github.com:revington/frontend-boilerplate.git`
`$ cd frontend-boilerplate`
`$ npm install`
`$ node server.js`
In a different terminal run `$ npm run webpack` to bundle.  
Then visit [http://localhost:3000/login](http://localhost:3000/login)

