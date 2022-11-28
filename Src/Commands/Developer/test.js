const Command = require('../../Structures/Command');
module.exports = class TestDev extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      description: {
        content: 'Some commands for developers.',
      },
      category: 'Developer',
    });
  }

  async run(client, ctx) {
    const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior } = require('@discordjs/voice');

    const connection = joinVoiceChannel({
      channelId: '960617710956466176',
      guildId: '784595097102581781',
      adapterCreator: ctx.guild.voiceAdapterCreator,
      selfMute: false,
      selfDeaf: false,
    });

    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Stop,
      },
    });
    const resource = createAudioResource(
      'https://cdn.discordapp.com/attachments/1028073016183242763/1028819391061696522/SPOILER_lv_0_20221010030047.mp4',
    );
    player.play(resource);
    connection.subscribe(player);
  }
};
