import { ISchoolClassDto } from '../dtos/ISchoolClass';
import { SchoolClass } from '../entities/ISchoolClass';

export class SchoolClassMapper {
    static toDto(schoolClass: SchoolClass): ISchoolClassDto {
        const { id, name, school, schoolId, tag } = schoolClass;

        return {
            id,
            name, 
            schoolId, 
            school, 
            tag
        };
    }

    static toDomain(schoolClass: ISchoolClassDto): SchoolClass {
        const { id, ...rest } = schoolClass;
        return SchoolClass.create({ ...rest }, id);
    }
}
