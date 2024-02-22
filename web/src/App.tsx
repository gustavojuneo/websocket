import { useEffect } from 'react'
import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

function App() {
  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3333")
    }
    else {
      socket.emit("teste", { message: 'Eae maykao' })
    }
  }, [])

  return (
    <h1>Teste</h1>
  )
}

export default App
