// const chalk = import('chalk');
// console.log(chalk.blue("Hello priya welcome to kartik world"));
// in ES file using import in place of require
import chalk from 'chalk';

import validator from 'validator';

console.log(chalk.green.italic.inverse("Hello priya welcome to kartik world"));

const res = validator.isEmail("kartikgaud.com")
console.log(res)

