import { Router, Request, Response } from 'express'
const ip = require('ip');

import {
    logger, errorHandler
} from './middlewares'

const router = Router()

router.use(logger)
router.use(errorHandler)

router.get('/', (req: Request, res: Response) => {
    return res.json({ name: 'mjml-converter', ip: ip.address() })
})

 
export default router