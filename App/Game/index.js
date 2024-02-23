import { Player } from './player.js'

export async function initializeBattle(interaction) {
  try {

    /** Initalize player objects */
    const playerOne = new Player({ id: interaction.user.id })
    const playerTwo = new Player({ id: interaction.options.getUser('user').id })

    /** Initalize and send response message */
    const message = await interaction.reply({
      content: `<@${playerOne.id}> is challenging <@${playerTwo.id}> to a battle!`,
      embeds: [{
        title: 'Battle to the death!',
        description: `Both challengers will start with ${Player.startingHealth} health and ${Player.startingShields} shields. Let the battle begin!`,
        fields: [
          { name: `​`, value: `<@${playerOne.id}>\n>>> Health: **${playerOne.health}**\n${'​' + ':shield:'.repeat(playerOne.shields)}`, inline: true },
          { name: `​`, value: `<@${playerTwo.id}>\n>>> Health: **${playerTwo.health}**\n${'​' + ':shield:'.repeat(playerTwo.shields)}`, inline: true },
        ],
      }],
      ephemeral: false,
      fetchReply: true,
    })


  
  }
  catch (err) {
    console.log('Ran into the following error message: ', err)
  }
}