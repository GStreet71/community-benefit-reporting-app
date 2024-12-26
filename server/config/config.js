import express from 'express';
import userRoutes from '../routes/userRoutes.js';
import registerRoutes from '../routes/registerRoutes.js';
import loginRoutes from '../routes/loginRoutes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(registerRoutes);
app.use(loginRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});