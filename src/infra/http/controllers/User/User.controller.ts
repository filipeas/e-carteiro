
            import { Request, Response } from 'express';
            import { container } from 'tsyringe';

            export class UserController {
                async handle(request: Request, response: Response): Promise<Response> {
                    const { email, storeId, password } = request.body;

                    const user = container.resolve(UserUseCase);

                    const entity = await user.run({ email, storeId, password });

                    if (entity.isLeft()) {
                    return response.status(entity.value.statusCode).json({ error: entity.value });
                    }

                    return response.json({ entity: entity.value });
                }
            }
            