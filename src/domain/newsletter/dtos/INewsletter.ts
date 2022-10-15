import { ISchoolDto } from "@domain/school/dtos/ISchool";

export interface INewsletterDto {
  id: string;
  schoolId: string;
  school?: ISchoolDto;
  email: string;
}
