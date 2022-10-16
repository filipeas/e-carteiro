import { ISchoolRepository } from "@application/repositories/school/ISchool.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { School } from "@domain/school/entities/ISchool";

export class SchoolInMemoryRepository implements ISchoolRepository{
  private schools: School[] = [];

  async findById(id: string): AsyncMaybe<School> {
    return this.schools.find(school => school.id === id);
  }

  async create(school: School): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async save(school: School): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string, schoolId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}