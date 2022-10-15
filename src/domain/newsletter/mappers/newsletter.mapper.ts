import { INewsletterDto } from '../dtos/INewsletter';
import { Newsletter } from '../entities/INewsletter';

export class NewsletterMapper {
    static toDto(newsletter: Newsletter): INewsletterDto {
        const { id, email, school, schoolId } = newsletter;

        return {
            id,
            email, 
            schoolId, 
            school 
        };
    }

    static toDomain(newsletter: INewsletterDto): Newsletter {
        const { id, ...rest } = newsletter;
        return Newsletter.create({ ...rest }, id);
    }
}
