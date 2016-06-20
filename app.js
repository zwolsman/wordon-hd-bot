var argv = require('optimist')
    .usage('Count the lines in a file.\nUsage: $0')
    .demand('u')
    .demand('p')
    .alias('u', 'username')
    .alias('p', 'password')
    .describe('u', 'Username (email adress)')
    .describe('p', 'Password (plaintext)')
    .argv;

var Bot = require('./bot');

var bot = new Bot(argv.username, argv.password);
bot.login();
