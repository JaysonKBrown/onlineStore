

const express = require ('express')
const PORT = 3001 || process.env.PORT



// Security
const helmet = require('helmet')
const cors = require('cors')

const server = express()
.use(cors())
.use(express.json())

server.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        crossOriginResourcePolicy: false,
        directives: {
            "img-src": ["'self'", "https: data:"]
        }
    })
)

const router = require('./app/routes/router')
server.use('/', router)

server.listen(PORT, () => console.log(`And that's on PORT: ${PORT}`))
