import { AsyncMaybe } from "@core/logic/maybe";
import { School } from "@domain/school/entities/ISchool";

export interface ISchoolRepository {
  findById(id: string): AsyncMaybe<School>;
  create(school: School): Promise<void>;
  save(school: School): Promise<void>;
  delete(id: string, schoolId: string): Promise<void>;
}