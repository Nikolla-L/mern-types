import express , { Express } from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import morgan from 'morgan';
import todoRoutes from './routes';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3001;
const connection_url = process.env.CONNECTION_URl;

app.use(cors());
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));
app.use(todoRoutes);

mongoose.connect('mongodb+srv://nikolla:12341234@nikoloza.84pn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
        .catch(error => console.log(error))