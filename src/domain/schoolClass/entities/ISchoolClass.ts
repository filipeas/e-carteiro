import { Entity } from '@core/domain/entity';
import { ISchoolDto } from '@domain/school/dtos/ISchool';

type ISchoolClassProps = {
    schoolId: string;
    school?: ISchoolDto;
    name: string;
    tag: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type ISchoolClassBody = {
    name?: string;
    tag?: string;
};

export class SchoolClass extends Entity<ISchoolClassProps> {
    private constructor(props: ISchoolClassProps, id?: string) {
        super(props, id);
    }

    get schoolId() {
        return this.props.schoolId;
    }

    get school() {
        return this.props.school;
    }

    get name() {
        return this.props.name;
    }

    get tag() {
        return this.props.tag;
    }

    public update(body: ISchoolClassBody) {
        Object.assign(this.props, body);
    }

    static create(props: ISchoolClassProps, id?: string) {
        const entity = new SchoolClass(props, id);

        return entity;
    }
}
