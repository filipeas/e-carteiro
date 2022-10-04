
            import { IJWTProvider, IPayload } from '@application/providers/jwt.provider';
            import jwtConfig from '@infra/config/jwt.config';
            import { sign } from 'jsonwebtoken';

            export class JsonWebTokenJWTAdapter implements IJWTProvider {
                async sign(payload: IPayload, subject: string): Promise<string> {
                    return sign(payload, String(jwtConfig.secret), {
                    subject,
                    expiresIn: jwtConfig.expiresIn,
                    });
                }
            }
            