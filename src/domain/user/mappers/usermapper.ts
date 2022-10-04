
        import { IuserDto } from '../dtos/user.dto';
        import { user } from '../entities/user';

        export class userMapper {
            static toDto(entity: user): IuserDto {
                const { id, title } = entity;

                return {
                id,
                title
                };
            }

            static toDomain(entity: IuserDto): user {
                const { id, ...rest } = entity;
                return user.create({ ...rest }, id);
            }
        }
        