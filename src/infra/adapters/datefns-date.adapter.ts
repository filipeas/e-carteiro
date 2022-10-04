
            import { IDateProvider } from '@application/providers/date.provider';
            import { subHours, addHours, isAfter } from 'date-fns';

            export class DateFnsDateAdapter implements IDateProvider {
                addHours(date: Date, housToAdd: number): Date {
                    return addHours(date, housToAdd);
                }

                subHours(date: Date, housToSubtract: number): Date {
                    return subHours(date, housToSubtract);
                }

                isAfter(date: Date, dateToCompare: Date): boolean {
                    return isAfter(date, dateToCompare);
                }
            }
            