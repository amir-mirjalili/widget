import http from 'http';
import cluster from 'cluster';

import {cpus} from 'os';
import app from './src/providers/app';
import {config} from 'dotenv';
config();

const numOfCPUs = cpus().length;

const server = http.createServer(app);
const {PORT, HOST} = process.env;
if (process.env.NODE_ENV === 'dev') {
    server.listen(PORT, () => {
        console.log(`Service Api run: ${HOST} : ${PORT}`)
    });
} else {
    if (cluster.isWorker) {
        server.listen(PORT, () => {
            console.log(`Service Api run: ${HOST} : ${PORT}`)
        });
    } else {
        for (let i = 0; i < numOfCPUs; i++) {
            cluster.fork();
        }

        cluster.on('online', function (worker) {
            console.log(`Worker ${worker.process.pid} is online`)
        });

        cluster.on('exit', (worker, code, signal) => {
            console.log(`'Worker ${worker.process.pid} died with code: ${code} , and signal: ${signal}`)
            console.log('Starting a new worker')
            cluster.fork();
        });
    }
}
