import { IContactRepository } from "@application/repositories/contact/IContact.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { Contact } from "@domain/contact/entities/IContact";

export class ContactInMemoryRepository implements IContactRepository{
  private contacts: Contact[] = [];

  async findBySchoolId(schoolId: string): Promise<Contact[]> {
    return this.contacts.filter(contact => contact.schoolId === schoolId);
  }
  
  async findById(id: string, schoolId: string): AsyncMaybe<Contact> {
    return this.contacts.find(contact => contact.id === id && contact.schoolId === schoolId);
  }
  
  async create(contact: Contact): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async save(contact: Contact): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async delete(id: string, schoolId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}