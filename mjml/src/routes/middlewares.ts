import { Request, Response, NextFunction } from 'express'

type MiddleWare = (req: Request, res: Response, next: NextFunction) => void

const logger: MiddleWare = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}

const errorHandler: MiddleWare = (req, res, next) => {
  try {
    next()
  }
  catch (error) {
    return res.json({ error: error.message })
  }
}


export {
  logger, errorHandler
}