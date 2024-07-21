import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    cityId: {type: mongoose.Schema.Types.ObjectId, required: true},
    hotelId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userName: {type: String, required: true},
    userSurname: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPhone: {type: String, required: true},
    numberOfPeople: {type: Number, required: true},
    numberOfNights: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
});

const Reservation = mongoose.model('reservation', reservationSchema);

export default Reservation;