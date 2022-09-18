import express from "express";
import dotenv from 'dotenv';
import mongoDB from './config/db.js'
import productRouter from './routes/productsRoute.js'
import userRouter from './routes/userRoutes.js'
import  {notFound, errorHandler} from './middlewares/errorMiddleware.js'


mongoDB();
dotenv.config();


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API IS HOT");
})


app.use("/api/products", productRouter);
app.use("/api/users", userRouter);



app.use(notFound);
app.use(errorHandler);



app.listen(process.env.PORT || 3001, () => {
    console.log("SERVER STARTED");
})