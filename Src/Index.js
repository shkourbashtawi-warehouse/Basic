const Basic = require('./Structures/Client');
const Config = require('./Assets/Config');
const { createWriteStream } = require('fs');
const { format } = require('util');
const file = createWriteStream('./Src/Logs/error.log', { flags: 'a' });
const client = new Basic();
require('dotenv').config();
const path = __dirname;
exports.path = path;
process.on('uncaughtException', (e) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const time = date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
  const dateString = `[${month}/${day}/${year}] [${time} ${date.getHours() >= 12 ? 'PM' : 'AM'}]`;
  file.write(`${dateString} ${format(e)}\n`);
  client.config.Script.WebhookError.send({
    threadId: '1033120238960660492',
    username: 'ErrorManager : Basic Bot',
    content: `\`\`\`js\n${e.stack}\`\`\``,
  });
  client.logger.error(e);
});

process.on('unhandledRejection', (e) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const time = date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
  const dateString = `[${month}/${day}/${year}] [${time} ${date.getHours() >= 12 ? 'PM' : 'AM'}]`;
  file.write(`${dateString} ${format(e)}\n`);
  client.config.Script.WebhookError.send({
    threadId: '1033120238960660492',
    username: 'ErrorManager : Basic Bot',
    content: `\`\`\`js\n${e.stack}\`\`\``,
  });
  client.logger.error(e);
});

client.login(Config.Danger.Token);
