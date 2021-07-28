import { Router } from 'express'
const router = Router()
import * as modelsCtrl from "../controllers/models.js"

router.get('/', modelsCtrl.index)
// router.post('/', modelsCtrl.create)
// router.delete('/:id', modelsCtrl.delete)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

export {
  router
}
