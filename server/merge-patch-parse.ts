import * as restify from 'restify'
import { BadRequestError } from 'restify-errors'

const applicationPatch = 'application/merge-patch+json'

export const mergePatchBodyParser = (req: restify.Request, res: restify.Response, next) => {
  if (req.getContentType() === applicationPatch && req.method === 'PATCH') {
    (<any>req).rawBody = req.body
    try {
      req.body = JSON.parse(req.body)
    } catch(e) {
      return next(new BadRequestError(`Invalid content ${e.message}`))
    }
  }

  return next()
}