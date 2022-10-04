
            import { Router } from 'express';
            import { AuthCustomerController } from '../controllers/User/auth-customer.controller';

            const userRouter = Router();

            const authCustomer = new AuthCustomerController();

            userRouter.post('/auth-customer', authCustomer.handle);

            export { userRouter };
            