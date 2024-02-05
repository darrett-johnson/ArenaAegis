import { REST, Routes } from "discord.js"
// import { battle } from './slashCommand.battle.js'

import * as dotenv from 'dotenv'
dotenv.config()

/** registerCommand
  * Import the command to register
  * Call registerCommand with the command to register as the argument
  * Run `npm run update-commands` from the command line */
async function registerCommand(command) {
  try {
    const restAPI = new REST().setToken(process.env.TOKEN)
    await restAPI.put(Routes.applicationCommands(process.env.APPLICATION_ID), { body: [command] })

    console.log(`Successfully registered the "${command.name}" slash command.`)
  }
  catch (err) {
    console.log(`Unsuccessfully registered the "${command.name}" slash command. Received the following error: `, err)
  }
}

/** deleteCommand
  * Import the command to delete
  * Call deleteCommand with the command to delete as the argument
  * Run `npm run update-commands` from the command line */
 async function deleteCommand(command) {
  try {}
  catch (err) {}
}