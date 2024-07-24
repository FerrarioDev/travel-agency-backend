import connectDB from "./config/db.js";
import cityRouter from "./routes/city.router.js";
import hotelRouter from "./routes/hotel.router.js";
import reservationRouter from "./routes/reservation.router.js";
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';


const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/cities', cityRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/reservations', reservationRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('../public'));