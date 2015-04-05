# How to use
- create an alias in **.bashrc** or **.zshrc** as follows (Mac environment)
```
alias news=<path to deployment.sh containing in the root of this project>
```
- Source the updated rc file e.g,
```
$ source ~/.zshrc
```
- Execute alias
```
$ news
```
- Enjoy reading news with clean UI :)

# How to develop (or contribute)

## This repository consists of two things.
1. **MyTOI** 					:	Front-end code written in React & Flux
2. **MyTOI-backend** 	:	Backned proxy server for TOI API which serves contents fetched from TOI


Make sure you have latest version of node js installed on your machine.

The build process is still in rudimentary stage. For development you will need to start both `webpack` server (From MyTOI project) and `express` server (From MyTOI-backend project)

Make sure that you *cd* into both the projects and run `npm install`

**To start webpack server**
```
$ cd MyTOI
$ npm run dev
```

**To start express server**

Install nodemon (http://nodemon.io/)

```
$ cd MyTOI-backend
$ nodemon ./bin/www
```

Visit following url when both servers are up.
```
http://localhost:8080/
```
