import { Entity } from '@core/domain/entity';
import { ISchoolDto } from '@domain/school/dtos/ISchool';

type INewsletterProps = {
    schoolId: string;
    school?: ISchoolDto;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type INewsletterBody = {
    email?: string;
};

export class Newsletter extends Entity<INewsletterProps> {
    private constructor(props: INewsletterProps, id?: string) {
        super(props, id);
    }

    get schoolId() {
        return this.props.schoolId;
    }

    get school() {
        return this.props.school;
    }

    get email() {
        return this.props.email;
    }

    public update(body: INewsletterBody) {
        Object.assign(this.props, body);
    }

    static create(props: INewsletterProps, id?: string) {
        const entity = new Newsletter(props, id);

        return entity;
    }
}
