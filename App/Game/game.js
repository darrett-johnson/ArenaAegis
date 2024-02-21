import { Player } from "./player.js"

export function initGame(interaction) {
      
  const player_one = new Player({
    id: interaction.user.id, 
    name: interaction.user.globalName
  })

  const player_two = new Player({
    id: interaction.options.getUser('user').id,
    name: interaction.options.getUser('user').globalName
  })

  interaction.reply({
    content: `${interaction}`
  })
  
}