import { INewsletterRepository } from "@application/repositories/newsletter/INewsletter.repository";
import { AsyncMaybe } from "@core/logic/maybe";
import { Newsletter } from "@domain/newsletter/entities/INewsletter";

export class NewsletterInMemoryRepository implements INewsletterRepository{
  private newsletters: Newsletter[] = [];

  async findBySchoolId(schoolId: string): Promise<Newsletter[]> {
    return this.newsletters.filter(newsletter => newsletter.schoolId === schoolId);
  }

  async findById(id: string, schoolId: string): AsyncMaybe<Newsletter> {
    return this.newsletters.find(newsletter => newsletter.id === id && newsletter.schoolId === schoolId);
  }

  async create(newsletter: Newsletter): Promise<void> {
    this.newsletters.push(newsletter);
  }

  async save(newsletter: Newsletter): Promise<void> {
    const findedIndex = this.newsletters.findIndex(item => item.id === newsletter.id);

    if (findedIndex >= 0) {
      this.newsletters[findedIndex] = newsletter;
    }
  }

  async delete(id: string, schoolId: string): Promise<void> {
    const tempNewsletter: Newsletter[] = [];

    for (const newsletter of this.newsletters) {
      if (newsletter.id === id && newsletter.schoolId === schoolId) {
        //
      } else {
        tempNewsletter.push(newsletter);
      }
    }

    this.newsletters = tempNewsletter;
  }
}