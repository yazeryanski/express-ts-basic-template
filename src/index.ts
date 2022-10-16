import 'dotenv/config';
import express from "express";
import logger from 'middlewares/logger';
import initRoutes from 'routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger);
initRoutes(app);


app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT);
  
})