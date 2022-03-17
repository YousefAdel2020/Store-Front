import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import userRouter from './handlers/userHandler';
import productRouter from './handlers/productHandler';
import orderRoutes from './handlers/orderHandler';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(cors());

app.use(bodyParser.json())


userRouter(app)
productRouter(app)
orderRoutes(app)

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;
