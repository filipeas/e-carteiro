import { IStudentRepository } from "@application/repositories/student/IStudent.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { Student } from "@domain/student/entities/IStudent";

export class StudentInMemoryRepository implements IStudentRepository{
  private students: Student[] = [];

  async findBySchoolClassId(schoolClassId: string): Promise<Student[]> {
    return this.students.filter(student => student.schoolClassId === schoolClassId);
  }

  async findById(id: string, schoolClassId: string): AsyncMaybe<Student> {
    return this.students.find(student => student.id === id && student.schoolClassId === schoolClassId);
  }

  async create(student: Student): Promise<void> {
    this.students.push(student);
  }

  async save(student: Student): Promise<void> {
    const findedIndex = this.students.findIndex(item => item.id === student.id);

    if (findedIndex >= 0) {
      this.students[findedIndex] = student;
    }
  }

  async delete(id: string, schoolClassId: string): Promise<void> {
    const tempStudents: Student[] = [];

    for (const student of this.students) {
      if (student.id === id && student.schoolClassId === schoolClassId) {
        //
      } else {
        tempStudents.push(student);
      }
    }

    this.students = tempStudents;
  }
}