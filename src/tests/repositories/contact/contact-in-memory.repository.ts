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
    this.contacts.push(contact);
  }
  
  async save(contact: Contact): Promise<void> {
    const findedIndex = this.contacts.findIndex(item => item.id === contact.id);

    if (findedIndex >= 0) {
      this.contacts[findedIndex] = contact;
    }
  }
  
  async delete(id: string, schoolId: string): Promise<void> {
    const tempContacts: Contact[] = [];

    for (const contact of this.contacts) {
      if (contact.id === id && contact.schoolId === schoolId) {
        //
      } else {
        tempContacts.push(contact);
      }
    }

    this.contacts = tempContacts;
  }
}