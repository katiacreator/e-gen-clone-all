import("dotenv/config.js")//if bug check this
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
//if bug check this
import cookieParser from 'cookie-parser'
import logger from 'morgan'
//if bug check this
import methodOverride from 'method-override'
import ('./config/database.js')//if bug check this
//if bug check this
import { router as indexRouter } from './routes/index.js'
import { router as modelsRouter } from './routes/models.js'
//if bug check this
import ('./config/database.js')

const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')
//if bug check this
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//if bug check this
app.use(cookieParser())
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
//if bug check this
app.use('/', indexRouter)
app.use('/models', modelsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
