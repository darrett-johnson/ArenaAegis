import { SlashCommandBuilder } from "discord.js"

export const battle = new SlashCommandBuilder()
  .setName('battle')
  .setDescription('battle with another user!')
  .addUserOption((option) => (option
    .setName('user')
    .setDescription('choose the user to battle against')
    .setRequired(true)
  ))
// .addStringOption((option) => (option
//   .setName('mode')
//   .setDescription('choose the battle mode')
//   .addChoices(
//     { name: 'manual', value: 'manual' },
//     { name: 'auto', value: 'auto'},
//     { name: 'auto-with-interactions', value: 'auto-with-interactions'},
//   )
//   .setRequired(true)
// ))