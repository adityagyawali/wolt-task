import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import discovery from './controllers/discovery'
const app: Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Serve the static files from the React app
app.use(express.static('build'))

app.use('/discovery', discovery)

app.get('*', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

export default app
