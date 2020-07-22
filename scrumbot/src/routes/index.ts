import { Router, Request, Response, Application } from 'express'
import { readFileSync } from 'fs'
const ip = require('ip');

import MjmlService from '../mjml_service_handler'

// dbmodel
// import Reports from '../db/report.model'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const service = await MjmlService.ping()
        return res.json({ name: 'scrumbot', ip: ip.address(), service })
    }
    catch (error) {
        return res.json({ error: error.message })
    }
})
 
export default router