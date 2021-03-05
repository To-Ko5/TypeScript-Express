import express, { Request, Response, NextFunction } from 'express'
const app = express()

app.use(express.json())
app.use(express.static('public'))

const members = [
  {
    id: 1,
    name: 'tom',
    email: 'abc@demo.com',
    status: true
  },
  {
    id: 2,
    name: 'ken',
    email: 'zzz@demo.com',
    status: true
  },
  {
    id: 3,
    name: 'mike',
    email: 'ddd@demo.com',
    status: false
  }
]

app.use((req, res, next) => {
  console.log('hello')
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
