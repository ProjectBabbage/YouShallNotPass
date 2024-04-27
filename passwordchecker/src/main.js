require('dotenv').config()
const MilleFeuille = require('@frenchpastries/millefeuille')
const { get, ...Assemble } = require('@frenchpastries/assemble')

const levels = process.env.LEVEL.split('/').map((q) => q.split(';'))
console.log(levels)

const handler = (request) => {
  console.log(request.url)
  const url = request.url.split('/')
  const lvl = url[1]
  const mdp = url[2]
  const f = levels.find((p) => p[0] === lvl && p[1] === mdp)
  return {
    statusCode: f ? 200 : 403,
    body: f ? 'good job' : 'try again',
  }
}

const handlerModel = (request) => {
  const f = levels.map((a) => a[0])
  console.log(f)
  return {
    statusCode: 200,
    body: JSON.stringify(f),
  }
}

const allRoutes = Assemble.routes([
  get('/:lvl/:pass', handler),
  get('/modele', handlerModel),
])

console.log(process.env.PORT)
MilleFeuille.create(allRoutes)
