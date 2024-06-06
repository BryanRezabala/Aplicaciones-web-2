import express from 'express';
import routes from './router';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
