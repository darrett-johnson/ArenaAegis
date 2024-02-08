/* Contains the logic for instantiating the Client class */
/* Contains the logic for configuring the client */
import { Client, GatewayIntentBits } from 'discord.js'

export const client = new Client({
  intents: []
})