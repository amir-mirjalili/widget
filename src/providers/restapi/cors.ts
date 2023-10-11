import { Request, Response } from 'express';

export const Cors = (req: Request, res: Response, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,version');
    next();
};