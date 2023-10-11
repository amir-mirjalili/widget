import express, {Request, Response} from 'express';
import {Cors} from './restapi/cors';
import {ApiRes} from './restapi/status';

const app = express();

//App usages
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Cors
app.use(Cors);

// App routers

app.get('/', (req, res) => {
    ApiRes(res, <RestApi.ResInterface>{
        status: 200,
        msg: 'Auth Service service',
        data: undefined,
    });
});
// Error Pages
app.use((req: Request, res: Response) => {
    ApiRes(res, <RestApi.ResInterface>{
        status: 404,
        msg: undefined,
        data: undefined,
    });
});

export default app;