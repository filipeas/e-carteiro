import { IStudentRepository } from "@application/repositories/student/IStudent.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { Student } from "@domain/student/entities/IStudent";

export class StudentInMemoryRepository implements IStudentRepository{
  private students: Student[] = [];

  async findBySchoolClassId(schoolClassId: string): Promise<Student[]> {
    return this.students.filter(student => student.schoolClassId === schoolClassId);
  }

  async findById(id: string, schoolId: string): AsyncMaybe<Student> {
    return this.students.find(student => student.id === id && student.schoolId === schoolId);
  }

  async create(schoolClass: Student): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async save(schoolClass: Student): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string, schoolId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}