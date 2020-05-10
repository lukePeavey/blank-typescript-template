import express from 'express'

// Create Express server
const app = express()

const server = app.listen(8888, () => {
  /* eslint-disable-next-line no-console */
  console.log('App is running on port 8888')
})

export default server
