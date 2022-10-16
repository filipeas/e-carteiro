import { IStudentDto } from '../dtos/IStudent';
import { Student } from '../entities/IStudent';

export class StudentMapper {
    static toDto(student: Student): IStudentDto {
        const { id, email, phoneNumber, schoolClass, schoolClassId} = student;

        return {
            id,
            email, 
            phoneNumber, 
            schoolClassId,
            schoolClass, 
        };
    }

    static toDomain(student: IStudentDto): Student {
        const { id, ...rest } = student;
        return Student.create({ ...rest }, id);
    }
}
