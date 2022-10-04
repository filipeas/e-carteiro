
            import { ICustomerDto } from '@domain/customers/dtos/customer.dto';
            import { IUserDto } from '@domain/users/dtos/user.dto';

            export type IPayload = IUserDto | ICustomerDto;

            export interface IJWTProvider {
                sign(payload: IPayload, subject: string): Promise<string>;
            }
            