import { ISchoolClassDto } from "@domain/schoolClass/dtos/ISchoolClass";

export interface IStudentDto {
  id: string;
  schoolClassId: string;
  schoolClass?: ISchoolClassDto;
  email: string;
  phoneNumber: string;
}
