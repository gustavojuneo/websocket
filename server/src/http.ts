import httpServer from 'node:http'
import { Server } from 'socket.io'


const server = httpServer.createServer()
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173"
  }
})

const onConnection = (socket) => {
  console.log("connectou")
}

io.on("connection", onConnection)

server.listen(3333)