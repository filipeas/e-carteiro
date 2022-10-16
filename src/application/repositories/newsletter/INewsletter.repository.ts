import { AsyncMaybe } from "@core/logic/maybe";
import { Newsletter } from "@domain/newsletter/entities/INewsletter";

export interface INewsletterRepository {
  findBySchoolId(schoolId: string): Promise<Newsletter[]>;
  findById(id: string, schoolId: string): AsyncMaybe<Newsletter>;
  create(newsletter: Newsletter): Promise<void>;
  save(newsletter: Newsletter): Promise<void>;
  delete(id: string, schoolId: string): Promise<void>;
}