import express, { Request, Response, NextFunction } from 'express'
const app = express()

app.use((req, res, next) => {
  console.log('hello')
  throw new Error('error')
  next()
})

app.get('/', (req, res, next) => {
  res.send('<h1>hello</h1>')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  next()
})

app.listen(3000)
