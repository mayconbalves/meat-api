import { Server } from './server/server'

const server = new Server()

server.bootstrap()
  .then((server) => {
    console.log('Server is lintening on:', server.application.address())
  })
  .catch((error) => {
    console.log('Error failed to start')
    console.error(error)
    process.exit(1)
  })