/* Contains the logic for logging in with the client */
/* Exports login() */

import { client } from './client.js'

import * as dotenv from 'dotenv'
dotenv.config()

export function login() {
  try {
    client.login(process.env.TOKEN)
    
    client.once('ready', event => (
      console.log(`Logged in as ${event.user.tag}`)
    ))
  }
  catch (err) {
    console.log(`Login unsuccessful. Received the following error: `, err)
  }
}