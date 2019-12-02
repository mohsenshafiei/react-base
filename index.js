const inquirer = require('inquirer');
const ncp = require('ncp').ncp;
ncp.limit = 16;

const generateReactProject = (name) => {
  console.log('generating... \n');
  const src = './template'
  const dist = `../${name}`
  ncp(src, dist, function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('created successfully!');
   console.log(`navigate to the folder ../${name}`)
  });
}

const generateChromeExtensionProject = (name) => {
  console.log('generating... \n');
  const src = './chrome-extension-template'
  const dist = `../${name}`
  ncp(src, dist, function (err) {
   if (err) {
     return console.error(err);
   }
   console.log('created successfully!');
   console.log(`navigate to the folder ../${name}`)
  });
}

const start = async () => {
  let name, type = null;
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'create:',
        choices: [
          'react',
          'chrome-extension',
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
    if (type === 'chrome-extension') {
      generateChromeExtensionProject(name)
    }
}
start();
