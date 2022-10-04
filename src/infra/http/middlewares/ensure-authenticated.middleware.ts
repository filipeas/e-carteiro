
            import { BadRequestError } from '@errors/bad-request.error';
            import { UnauthozitedError } from '@errors/unauthozited.error';
            import { UserPrismaRepository } from '@infra/database/prisma/repositories/users/user-prisma.repository';
            import { NextFunction, Request, Response } from 'express';
            import { verify, TokenExpiredError } from 'jsonwebtoken';

            interface IPayload {
                sub: string;
            }

            export async function ensureAuthenticated(
            request: Request,
            response: Response,
            next: NextFunction,
            ) {
                const authHeader = request.headers.authorization;

                if (!authHeader) {
                    const authError = new UnauthozitedError('Falha na autenticação');

                    response.status(authError.statusCode).json({ error: authError });

                    return;
                }

                const [, token] = authHeader.split(' ');

                try {
                    const { sub: id } = verify(
                    token,
                    String(process.env.JWT_SECRET),
                    ) as IPayload;

                    const userRepository = new UserPrismaRepository();
                    const user = await userRepository.findById(id);

                    if (!user) {
                    const badRequest = new BadRequestError('Usuário não encontrado');

                    response.status(badRequest.statusCode).json({ error: badRequest });

                    return;
                    }

                    request.user = {
                    id: user.id,
                    };

                    next();
                } catch (error) {
                    if (error instanceof TokenExpiredError) {
                    const authError = new UnauthozitedError(
                        'Token expirado',
                        'expired_error',
                    );

                    response.status(authError.statusCode).json({ error: authError });

                    return;
                    }

                    const authError = new UnauthozitedError('Token inválido');

                    response.status(authError.statusCode).json({ error: authError });
                }
            }
            