import http from 'http'
import server from './server'
const app = http.createServer(server)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
