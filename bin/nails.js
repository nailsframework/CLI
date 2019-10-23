#! /usr/bin/env node

var shell = require("shelljs");

generateProject = function (name) {
    shell.exec('git clone https://github.com/nailsframework/nails.git ' + name);
    shell.exec('cd ' + name);
    shell.exec('npm i');
    shell.exec('npm i -g npm install webpack')
    shell.exec('npm i -g webpack-cli')
    shell.exec('npm i -g npm install webpack-dev-server -g')
    shell.exec('npm start')


}


let args = process.argv;

if (args.length === 2) {
    console.error('Please specify action');
    return;
}
if (args[2] === 'new') {
    if (args.length === 4) {
        console.log('Generating Nails Project ' + args[3]);
        generateProject(args[3])
    } else {
        console.error('cannot generate nails project. Please specify name!');
    }
} else {

}






