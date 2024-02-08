/* Contains the logic for handling events sent to the client */
import { Events } from 'discord.js'
import { client } from './client.js'
import { battle } from './Interactions/interactions.battle.js'

export function listen() {
  try {
    client.on(Events.InteractionCreate, async (interaction) => {
      
      /* Handle all `slash command` interactions */
      if (interaction.isChatInputCommand()) {
        switch (interaction.commandName){
          
          /* Handle the `battle` slash command */
          case 'battle':
            battle(interaction)
            break

          /* Handle unknown interactions */
          default:
            console.log(`Received the following unknown command: ${interaction.commandName}`)
            return interaction.reply({ content: `${interaction.commandName} is an invalid command.`, ephemeral: true })
        }
      }

    })
  }
  catch (err) {
    console.log("Unexpected error. Received the following error: ", err)
  }
}