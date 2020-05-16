const express = require('express') // import express
const PORT = 3333 // port for server
const app = express() // instance express
app.use(express.json()) // json format for requests
const projects = []
let countReqApp = 0
app.use((req, res, next)=>{
  console.log(`Rota --> ${req.url} method --> ${req.method}`)
  next()
})

app.use((req, res, next)=>{
  countReqApp++
  console.log(`Request of number --> ${countReqApp}`)
  next()
})

function verifyProjectExists(req,res, next) {
  const {id} = req.params
  if(!projects[id]) {
    return res.status(400).json('project not found')
  }
  next()
}

app.get('/projects', (req, res) => { //route get
  return res.json(projects)
})

app.post('/projects', (req, res)=>{
  const {id, title} = req.body
  const tasks = []
  projects[id] = {id, title, tasks}
  return res.json(projects)
})

app.post('/projects/:id/tasks',verifyProjectExists, (req, res)=>{
  const {id} = req.params
  const {tasks} = req.body
  const title = projects[id].title
  projects[id] = {id, title, tasks}
  return res.status(201).json(projects)
})

app.put('/projects/:id', verifyProjectExists,(req, res)=>{
  const {id} = req.params
  const {title} = req.body
  const tasks = projects[id].tasks
  projects[id] = {id, title, tasks}
  return res.json(projects)
})

app.delete('/projects/:id', verifyProjectExists,(req, res)=>{
  const {id} = req.params
  console.log(projects[id])
  projects.shift(projects[id])
  return res.status(200).json('deleted')
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})


