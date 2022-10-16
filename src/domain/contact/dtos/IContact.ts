import { ISchoolDto } from "@domain/school/dtos/ISchool";

export interface IContactDto {
  id: string;
  schoolId: string;
  school?: ISchoolDto;
  email: string;
}
