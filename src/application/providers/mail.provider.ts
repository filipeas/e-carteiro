
            type IMailData = {
                to: string;
                subject: string;
                variables: unknown;
                path: string;
              };
              
              export interface IMailProvider {
                sendMail(mailData: IMailData): Promise<void>;
              }              
            