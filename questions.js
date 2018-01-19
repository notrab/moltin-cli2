const chalk = require('chalk');

module.exports = [
  {
    name: 'boilerplate',
    type: 'list',
    message: `What boilerplate do you wish to use?`,
    choices: [
      {
        name: 'React',
        value: 'moltin/react-demo-store'
      },
      {
        name: 'NextJS',
        value: 'moltin/example-nextjs-store'
      },
      {
        name: 'Vue',
        value: 'moltin/vue-demo-store'
      },
      {
        name: 'Ember',
        value: 'moltin/ember-test-store'
      }
    ]
  },
  {
    type: 'input',
    name: 'clientId',
    message: "What's your client ID?",
    validate: clientId => {
      if (!clientId) return chalk.red('You must provide a client ID');

      return true;
    }
  },
  {
    type: 'input',
    name: 'clientSecret',
    message: "What's your client secret?",
    validate: clientId => {
      if (!clientId) return chalk.red('You must provide a client secret');

      return true;
    }
  }
];
