# Javascript Developement environment
Setup javascript development environment.

Base on Pluralsight course: https://app.pluralsight.com/library/courses/javascript-development-environment/

## Editor

* Strong ES2015+ support: autocompletion, parse ES6 imports, auto refactoring
* Framework intelligence: support for popular JS frameworks, debugging, autocompletion
* Built-it terminal: all current status of the application in single window

Example: Atom, WebStorm, Brackets, VSCode

### EditorConfig

* Create an editor config file to maintain a consistent coding style between different editors and IDEs in a team. See http://editorconfig.org/. Add `.editorconfig` file and download the plugin if needed.


## Package Management

* Package manager for sharing code. Popular: bower and npm, but bower is deprecated, npm is the most popular.
* install node.
* initialize `package.json` file using `npm init`.
* to install dependencies, run `npm install`.

### Security scanning

* Can be done using Node Security Platform or retire.js.
* With node security platform:
    * Install globally: `npm install -g nsp`.
    * Run `nsp check` from command line to check vulnerabilities.
* Security checks can be run automatically as a part of a start script.

## Development web server

* http-server: simplest way, npm package, serve current directory, no configuration
* live-server: lightweight, live reloading
* express: lightweight, highly configurable, not only for static files, can be used in prod
* budo: integrates with browserify, live reloading
* webpack dev server: module bundler, serves from memory, live reloading, different dev server options
* browsersync: dedicated IP address to share on local network, all interactions are sync (ex: used to test on multiple devices), can be used with webpack, browserify, gulp...

#### Setup express

* See file `srcServer.js`, then run `node buildScripts\srcServer.js`.

#### Share work in progress

* localtunnel: use firewall hole, expose localhost in public url, easy to setup: install with npm, start up, type `lt --port 3000`
* ngrok: similar to localtunnel with additional features, security, additional setup steps 
* now: can be used for a node.js app, deploy with one command to the cloud, each time with new unique url
* surge: only for static files, deployed in public url, can use own domain name

#### Use localtunnel

* install localtunnel globally: `npm install localtunnel -g`
* start server `node buildScripts\srcServer.js`
* `lt --port 3000 --subdomain mysubdomain` (subdomain is optional)
