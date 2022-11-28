const Command = require('../../Structures/Command');
module.exports = class PingDevNormal extends Command {
  constructor(client) {
    super(client, {
      name: 'pingdev',
      description: {
        content: 'Some commands for developers.',
      },
      category: 'Developer',
      permissions: {
        team: [
          '832540305542742047',
          '685868171755913293',
          '913497938129469461',
          '787956837403197510',
          '939980483750674512',
          '575790052152573989',
        ],
      },
    });
  }

  async run(client, ctx) {
    if (!this.permissions.team.includes(ctx.user.id)) return;
    const msg = await ctx.sendDeferReply(`Pinging...`);
    return ctx.editMessage(
      `Pong! (Latency: ${msg.createdTimestamp - ctx.createdTimestamp}ms. API Latency: ${Math.round(client.ws.ping)}ms.)`,
    );
  }
};
