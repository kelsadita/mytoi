# This repository consists of two things.
1. **MyTOI** 					:	Front-end code written in React & Flux
2. **MyTOI-backend** 	:	Backned proxy server for TOI API which serves contents fetched from TOI

# Development instructions

The build process is still in rudimentary stage. For development you will need to start both `webpack` server (From MyTOI project) and `express` server (From MyTOI-backend project)

Make sure that you *cd* into both the projects and run `npm install`

**To start webpack server**
```
$ cd MyTOI
$ npm run dev
```

**To start express server**
```
$ cd MyTOI-backend
$ nodemon ./bin/www
```

Visit following url when both servers are up.
```
http://localhost:8080/
```

# How to use
- create an alias in **.bashrc** or **.zshrc** as follows (Mac environment)
```
alias news=<path to deployment.sh containing in the root of this project>
```
- Source the updated rc file e.g,
```
$ source ~/.zshrc
```
- Execute news command
```
$ news
```
- Enjoy reading news with clean UI :)

# Build proposal
1. Build front-end code by `cd` into `MyTOI` and execute this command `webpack -p`. This will generate production ready code in the `build` folder at the root of the project.
2. Rename `index.html` containing in this build folder to `index.hbs`.
3. Update script tag in `index.html` to `<script type="text/javascript" src="javascripts/bundle.js" charset="utf-8"></script>`.
4. Transfer this updated `index.html` to `MyTOI-backend/views`.
5. Next transfer `bundle.js` to `MyTOI-backend/public/javascripts/bundle.js`.

# Things that are need to be researched
1. Referencing images which are referenced in stylesheets.