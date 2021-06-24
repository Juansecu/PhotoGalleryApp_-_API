import { NextFunction, Request, Response } from 'express';

export function helloWorld(
    req: Request,
    res: Response,
    next?: NextFunction
): Response {
    return res.send('Hello, world!');
}
