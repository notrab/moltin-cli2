const path = require('path');
const fs = require('fs');
const { prompt } = require('inquirer');
const download = require('download-github-repo');
const chalk = require('chalk');

const questions = require('./questions');

const main = async appName => {
  const { boilerplate, clientId, clientSecret } = await prompt(questions);
  const destDir = path.join(process.cwd(), appName);

  try {
    if (fs.existsSync(destDir)) {
      console.log(
        `A project/folder already exists called ${chalk.cyan(destDir)}`
      );
      return;
    }
    // else {
    //   fs.mkdirSync(destDir);
    // }

    // redo: use download lib instead
    const newrepo = await new Promise((resolve, reject) => {
      download(boilerplate, destDir, err => {
        if (err) return reject(err);

        console.log(
          chalk.green(
            'Successfully created project called "' +
              appName +
              '" using the ' +
              boilerplate +
              ' boilerplate.'
          )
        );

        return resolve;
      });
    });
  } catch (e) {
    console.log(chalk.red('Something went wrong.', e.message));
    return;
  }
};

module.exports = main;
