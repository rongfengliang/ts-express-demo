import { OK } from 'http-status-codes';
import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';


@Controller('user/say-hello')
export class UserController {

    @Get()
    private get(req: Request, res: Response): any {
        Logger.Info('get called');
        return res.status(OK).json({
            message: 'get_called',
        });
    }


    @Post()
    private post(req: Request, res: Response): any {
        Logger.Info('post called');
        return res.status(OK).json({
            message: 'post_called',
        });
    }

}