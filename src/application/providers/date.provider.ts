
            export interface IDateProvider {
                addHours(date: Date, housToAdd: number): Date;
                subHours(date: Date, housToSubtract: number): Date;
                isAfter(date: Date, dateToCompare: Date): boolean;
              }              
            