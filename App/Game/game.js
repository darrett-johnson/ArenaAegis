import { Player } from "./player.js"

export function initGame(interaction) {
  
  
  const STARTING_HEALTH = 100
  const STARTING_SHIELDS = 3

  const player_one = new Player({
    id: interaction.user.id, 
    username: interaction.user.globalName,
    health: STARTING_HEALTH,
    shields: STARTING_SHIELDS
  })

  const player_two = new Player({
    id: interaction.options.getUser('user').id,
    username: interaction.options.getUser('user').globalName,
    health: STARTING_HEALTH,
    shields: STARTING_SHIELDS
  })

  interaction.reply({
    content: `
      player_one: {
        id: ${player_one.id},
        username: ${player_one.username},
        health: ${player_one.health},
        shields: ${player_one.shields},
      },
      player_two: {
        id: ${player_two.id},
        username: ${player_two.username},
        health: ${player_two.health},
        shields: ${player_two.shields},
      },
    `
  })
}