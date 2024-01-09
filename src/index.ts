import express from 'express';
import jsonDataRoute from './routes/jsonDataRoute';
import aggregatorRoute from './routes/aggregatorRoute';
import mixedRoute from './routes/mixedRoute';

const app = express();
const port = 3000;

app.use('/api', jsonDataRoute);
app.use('/api', aggregatorRoute);
app.use('/api', mixedRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});