import database from './config/database';
import { Todo } from './models/Todo';
import express from 'express';
import { User } from './models/User';
import userRoutes from './routes/users';
import todosRoutes from './routes/todos';
import auditRoutes from './routes/audits';
(async() => {
    await database.sync();
    const app = express();
    app.use(express.json());
    app.use(userRoutes);
    app.use(todosRoutes);
    app.use(auditRoutes);
    app.listen(6565, () => console.log('Server is active...'))
})();

