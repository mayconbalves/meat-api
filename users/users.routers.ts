import { Router } from '../common/router'
import { User } from '../users/users.model'
import * as restify from 'restify'

class UsersRoutes extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/users', (req, res, next) => {
      User.findAll()
        .then((users) => {
          res.json(users)
          return next()
        })
    })
  }
}

export const usersRoutes = new UsersRoutes()