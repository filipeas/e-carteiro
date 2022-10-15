import { ISchoolDto } from "@domain/school/dtos/ISchool";

export interface ISchoolClassDto {
  id: string;
  schoolId: string;
  school?: ISchoolDto;
  name: string;
  tag: string;
}
