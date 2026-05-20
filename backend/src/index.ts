import express from 'express';
import cors from 'cors';
import path from 'path';
import { uploadRouter } from './routes/upload.js';

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api', uploadRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
