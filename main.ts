import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
