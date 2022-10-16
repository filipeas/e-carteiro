import { IContactDto } from '../dtos/IContact';
import { Contact } from '../entities/IContact';

export class ContactMapper {
    static toDto(contact: Contact): IContactDto {
        const { id, email, school, schoolId } = contact;

        return {
            id,
            email, 
            schoolId, 
            school 
        };
    }

    static toDomain(contact: IContactDto): Contact {
        const { id, ...rest } = contact;
        return Contact.create({ ...rest }, id);
    }
}
