# Screenshots

### News List UI
![new list ui](https://github.com/kelsadita/mytoi/blob/master/screenshots/News-list.png)


### News Details UI
![new details ui](https://github.com/kelsadita/mytoi/blob/master/screenshots/News-details.png)

# Features

###Recent news listing based on various categories
1. Top News
2. City
3. India
4. World
5. Business
6. Technology
7. Sports
8. Education
9. Environment
10. Science

###News Details with following components,
1. Summary
2. Detail news
3. Related news
4. Videos (if any)
5. Comments (if any)

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

# TODOS
- Improvements in the comment box UI
- Pagination on comment box and news
