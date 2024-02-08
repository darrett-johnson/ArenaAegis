import { login } from './Client/client.login.js'
import { listen } from './Client/client.listen.js'

try {
  login()
  listen()
}
catch (err) {
  console.log("Unexpected error. Received the following error: ", err)
}