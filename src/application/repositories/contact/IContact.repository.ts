import { AsyncMaybe } from "@core/logic/maybe";
import { Contact } from "@domain/contact/entities/IContact";

export interface IContactRepository{
  findBySchoolId(schoolId: string): Promise<Contact[]>;
  findById(id: string, schoolId: string): AsyncMaybe<Contact>;
  create(contact: Contact): Promise<void>;
  save(contact: Contact): Promise<void>;
  delete(id: string, schoolId: string): Promise<void>;
}