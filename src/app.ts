import express, { Request, Response, NextFunction } from 'express'
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log('hello')
  next()
})

app.get('/', (req, res, next) => {
  res.render('index.ejs')
})

app.get('/about', (req, res, next) => {
  res.render('about.ejs')
})

app.post('/', (req, res, next) => {
  console.log(req.body)
  res.send(`<h1>${req.body}</h1>`)
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  next()
})

app.listen(3000)
