import { ISchoolDto } from '../dtos/ISchool';
import { School } from '../entities/ISchool';

export class SchoolMapper {
    static toDto(school: School): ISchoolDto {
        const { id, name, tag } = school;

        return {
            id,
            name,
            tag
        };
    }

    static toDomain(school: ISchoolDto): School {
        const { id, ...rest } = school;
        return School.create({ ...rest }, id);
    }
}
