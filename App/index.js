import { Client, GatewayIntentBits, Events } from 'discord.js'

import * as dotenv from 'dotenv'
dotenv.config()

try {
  const presence = { activities: [{ type: 5, name: 'battle!' }]}
  const intents = []

  const client = new Client({ presence: presence, intents: intents })

  client.login(process.env.TOKEN)

  client.once(Events.ClientReady, interaction => (
    console.log(`Logged in as ${interaction.user.tag}`)
  ))
}
catch (err) {
  console.log('Ran into the following error: ', err)
}