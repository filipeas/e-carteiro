import { Entity } from '@core/domain/entity';
import { ISchoolClassDto } from '@domain/schoolClass/dtos/ISchoolClass';

type IStudentProps = {
    schoolClassId: string;
    schoolClass?: ISchoolClassDto;
    email: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type IContactBody = {
    email?: string;
    phoneNumber?: string;
};

export class Student extends Entity<IStudentProps> {
    private constructor(props: IStudentProps, id?: string) {
        super(props, id);
    }

    get schoolClassId() {
        return this.props.schoolClassId;
    }

    get schoolClass() {
        return this.props.schoolClass;
    }

    get email() {
        return this.props.email;
    }

    get phoneNumber() {
        return this.props.phoneNumber;
    }

    public update(body: IContactBody) {
        Object.assign(this.props, body);
    }

    static create(props: IStudentProps, id?: string) {
        const entity = new Student(props, id);

        return entity;
    }
}
