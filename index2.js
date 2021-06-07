const express = require('express')
const app = express()
const port = 5000
const prom = require('prom-client')
const register = new prom.Registry()

register.setDefaultLabels({
  app: 'test'
})
prom.collectDefaultMetrics({ register })


const counter = new prom.Counter({
  name: "counter",
  help: 'metric_help',
  registers: [register]
});
register.registerMetric(counter)


//========================================================

app.get('/', (req, res) => {
  console.log("this is a test log")
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  console.log("this is a test log on test endpoint")
  counter.inc()
  res.send('Hello Emils mor!')
})

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.end(await register.metrics())
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
