
import { NextFunction, Request, Response } from 'express';

import { AppError } from '@errors/app.error';

export async function handleException(
    error: AppError | Error,
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: NextFunction,
): Promise<Response> {
    return response.status(500).json({
        error: {
            message: `Internal server error - ${error.message}`,
            type: 'server_error',
        },
    });
}
