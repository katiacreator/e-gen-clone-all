import { Router } from 'model'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collections' })
})

export { 
  router
}
