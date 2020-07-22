import express, {Application} from 'express'
import bodyParser from 'body-parser'
import { writeFileSync } from 'fs'
const cors = require('cors')
const ip = require('ip');

import router from './routes'


function onInit() {
  const app:Application = express()
  app.use(bodyParser.json());
  app.use(cors())

  writeFileSync('./shared/mjml.json', JSON.stringify({ ip: ip.address() }))

  app.use(router)

  app.listen(process.env.PORT || 3000, () => {
    console.log(`mjml service is listening at port ${process.env.PORT || 3000}!`)
  })
}

onInit()
