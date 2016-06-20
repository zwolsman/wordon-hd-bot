var argv = require('optimist')
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
