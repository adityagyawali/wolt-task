import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import discovery from './controllers/discovery'
const app: Application = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/discovery', discovery)

export default app
