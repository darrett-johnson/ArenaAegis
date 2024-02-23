import { initializeBattle } from "../Game/index.js"

export function battle(interaction){
  if (interaction.options.getUser('user').bot) {
    return interaction.reply({ content: `You cannot battle a bot!`, ephemeral: true })
  }
  if (interaction.user.id === interaction.options.getUser('user').id) {
    return interaction.reply({ content: `You cannot battle yourself!`, ephemeral: true })
  }
  if (!interaction.options.getMember('user')) {
    return interaction.reply({ content: `<@${interaction.options.getUser('user').id}> is not in this server!`, ephemeral: true })
  }

  initializeBattle(interaction)
}