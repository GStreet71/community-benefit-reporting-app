import express from 'express';
import userRoutes from '../routes/user-routes.js';
import registerRoutes from '../routes/register-routes.js';
import loginRoutes from '../routes/login-routes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(registerRoutes);
app.use(loginRoutes);
app.use(rolesRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});