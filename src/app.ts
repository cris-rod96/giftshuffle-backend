import express, {json,type Express} from 'express'
import cors from 'cors'


const app: Express = express()


app.use(json({
  limit: "50mb"
}))
app.use(cors())


export default app
