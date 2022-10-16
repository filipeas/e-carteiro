import { Entity } from '@core/domain/entity';
import { ISchoolDto } from '@domain/school/dtos/ISchool';

type IContactProps = {
    schoolId: string;
    school?: ISchoolDto;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type IContactBody = {
    email?: string;
};

export class Contact extends Entity<IContactProps> {
    private constructor(props: IContactProps, id?: string) {
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

    public update(body: IContactBody) {
        Object.assign(this.props, body);
    }

    static create(props: IContactProps, id?: string) {
        const entity = new Contact(props, id);

        return entity;
    }
}
