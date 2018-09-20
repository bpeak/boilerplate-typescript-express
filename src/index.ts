import * as express from 'express'
const app = express()
const PORT : number = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
    console.log(`PORT ${PORT} SERVER OPEND`)
})