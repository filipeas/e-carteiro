
        import { Entity } from '@core/domain/entity';

        type IuserProps = {
        title: string;
        createdAt?: Date;
        updatedAt?: Date;
        };

        type IuserBody = {
        title?: string;
        };

        export class user extends Entity<IuserProps> {
            private constructor(props: IuserProps, id?: string) {
                super(props, id);
            }

            get title() {
                return this.props.title;
            }

            public update(body: IuserBody) {
                Object.assign(this.props, body);
            }

            static create(props: IuserProps, id?: string) {
                const entity = new user(props, id);

                return entity;
            }
        }
        