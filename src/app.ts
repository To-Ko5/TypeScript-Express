import express, { Request, Response, NextFunction } from 'express'
import moment from 'moment'
import { members } from './Members'
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }:${moment().format()}`
  )
  next()
})

app.get('/', (req, res, next) => {
  const name = 'tom'
  res.render('index.ejs', { name: name })
})

app.get('/about', (req, res, next) => {
  res.render('about.ejs')
})

app.get('/user/:name?', (req, res, next) => {
  if (req.params.name) {
    res.send(req.params.name)
  } else {
    res.send('no user')
  }
})

app.get('/item/:id([0-9]+)', (req, res, next) => {
  if (req.params.id) {
    res.send(req.params.id)
  } else {
    res.send('no id')
  }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  next()
})

app.get('/api/members', (req, res) => {
  res.json(members)
})

app.listen(3000)
