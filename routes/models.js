//very important check every line of this code if errors
import { Router } from 'express'
const router = Router()
import * as modelsCtrl from "../controllers/models.js"

// localhost:3000/api/models RETRIEVE ALL COLLECTIONS
router.get('/models', modelsCtrl.index)
// localhost:3000/api/models/:id RETRIEVE A SINGLE COLLECTION
router.get('/models/:id', modelsCtrl.show)
// localhost:3000/api/models ADD A DOCUMENT TO COLLECTION
router.post('/models', modelsCtrl.create)
// localhost:3000/api/models/:id UPDATE A SINGLE DOCUMENT
router.put('/models/:id', modelsCtrl.update)
// localhost:3000/api/models/:id DELETE A SINGLE DOCUMENT
router.delete('/models/:id', modelsCtrl.delete)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

export {
  router
}
