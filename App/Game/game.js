import { Player } from "./player.js"

export class Game {

  constructor(interaction) {
    
    this.interaction = interaction
    
    this.STARTING_HEALTH = 100
    this.STARTING_SHIELDS = 3

    this.playerOne = new Player({
      id: this.interaction.user.id,
      username: this.interaction.user.globalName,
      health: this.STARTING_HEALTH,
      shields: this.STARTING_SHIELDS
    })

    this.playerTwo = new Player({
      id: this.interaction.options.getUser('user').id,
      username: this.interaction.options.getUser('user').globalName,
      health: this.STARTING_HEALTH,
      shields: this.STARTING_SHIELDS
    })

    try {
      this.message = this.interaction.reply({
        content: `<@${this.playerOne.id}> is challenging <@${this.playerTwo.id}> to a battle!`,
        embeds: [{
          title: "Battle to the death!",
          description: `Both challengers will start with ${this.STARTING_HEALTH} health and ${this.STARTING_SHIELDS} shields. Let the battle begin!`,
          fields: [
            { name: `​`, value: `<@${this.playerOne.id}>\n>>> Health: **${this.playerOne.health}**\n${'​' + ':shield:'.repeat(this.playerOne.shields)}`, inline: true },
            { name: `​`, value: `<@${this.playerTwo.id}>\n>>> Health: **${this.playerTwo.health}**\n${'​' + ':shield:'.repeat(this.playerTwo.shields)}`, inline: true },
          ],
        }],
        ephemeral: false,
        fetchReply: true,
      
      })
    }
    catch (err) {
      console.log("Attempted to send message. Ran into the follow error: ", err)
    }

  }

}