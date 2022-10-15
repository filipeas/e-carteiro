import { Entity } from '@core/domain/entity';

type ISchoolProps = {
    name: string;
    tag: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type ISchoolBody = {
    name?: string;
    tag?: string;
};

export class School extends Entity<ISchoolProps> {
    private constructor(props: ISchoolProps, id?: string) {
        super(props, id);
    }

    get name() {
        return this.props.name;
    }

    get tag() {
        return this.props.tag;
    }

    public update(body: ISchoolBody) {
        Object.assign(this.props, body);
    }

    static create(props: ISchoolProps, id?: string) {
        const entity = new School(props, id);

        return entity;
    }
}
