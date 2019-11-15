const inquirer = require('inquirer');
var ncp = require('ncp').ncp;
ncp.limit = 16;

const generateReactProject = (name) => {
  console.log('generating \n');
  const source = './template'
  const destination = `./${name}`
  ncp(source, destination, function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('your project created successfully!');
  });
}

const start = async () => {
  let name, type = null;
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What do you want to do?',
        choices: [
          'react',
          'react-app-with-router',
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: "project name:"
      },
    ])
    .then(answers => {
      type = answers.type;
      name = answers.name;
    });
    if (type === 'react') {
      generateReactProject(name)
    }
}
start();
