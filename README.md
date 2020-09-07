# Helix Monorepo for Projects and Libraries
# READ THIS PLEASE BEFORE YOU DO STUFF.


### Run the following

- ##### Install lerna globally (Do once per machine)
`npm i -g lerna`
- ##### Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
`npm install`
- ##### Install dependencies for packages and create symlinks. Read more [here](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme)
`lerna bootstrap` 

- ##### HOW TO ADD DEPENDENCIES PROPERLY
`lerna add {INSERT NPM/YARN Package Name} packages/{PATH TO WHICH MICROSERVICE YOU WANT THIS TO INSTALL TO} {add -dev for dev dependencies}`
ex `lerna add react packages/library`
ex `lerna add eslint packages/library -dev`
