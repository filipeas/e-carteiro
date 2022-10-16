import { ISchoolClassRepository } from "@application/repositories/schoolClass/ISchoolClass.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { SchoolClass } from "@domain/schoolClass/entities/ISchoolClass";

export class SchoolClassInMemoryRepository implements ISchoolClassRepository{
  private schoolClasses: SchoolClass[] = [];

  async findBySchoolId(schoolId: string): Promise<SchoolClass[]> {
    return this.schoolClasses.filter(schoolClass => schoolClass.schoolId === schoolId);
  }

  async findById(id: string, schoolId: string): AsyncMaybe<SchoolClass> {
    return this.schoolClasses.find(schoolClass => schoolClass.id === id && schoolClass.schoolId === schoolId);
  }

  async create(schoolClass: SchoolClass): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async save(schoolClass: SchoolClass): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string, schoolId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}