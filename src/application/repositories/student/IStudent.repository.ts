import { AsyncMaybe } from "@core/logic/maybe";
import { Student } from "@domain/student/entities/IStudent";

export interface IStudentRepository {
  findBySchoolClassId(schoolClassId: string): Promise<Student[]>;
  findById(id: string, schoolId: string): AsyncMaybe<Student>;
  create(schoolClass: Student): Promise<void>;
  save(schoolClass: Student): Promise<void>;
  delete(id: string, schoolId: string): Promise<void>;
}