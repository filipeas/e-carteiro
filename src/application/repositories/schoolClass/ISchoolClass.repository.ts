import { AsyncMaybe } from "@core/logic/maybe";
import { SchoolClass } from "@domain/schoolClass/entities/ISchoolClass";

export interface ISchoolClassRepository {
  findBySchoolId(schoolId: string): Promise<SchoolClass[]>;
  findById(id: string, schoolId: string): AsyncMaybe<SchoolClass>;
  create(schoolClass: SchoolClass): Promise<void>;
  save(schoolClass: SchoolClass): Promise<void>;
  delete(id: string, schoolId: string): Promise<void>;
}